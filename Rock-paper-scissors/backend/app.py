from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from werkzeug.utils import secure_filename
import os
import json
from inference_sdk import InferenceHTTPClient
from decouple import config
from utils.inference import classify_image

API_URL = config('API_URL')
API_KEY = config('API_KEY')

CLIENT = InferenceHTTPClient(
    api_url=API_URL,
    api_key=API_KEY
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.post('/classify-image')
async def classify_image_endpoint(file: UploadFile = File(...)):
    try:
        if not file:
            raise HTTPException(status_code=400, detail="No image part")
        
        filename = secure_filename(file.filename)
        temp_path = os.path.join('uploads', filename)
        
        with open(temp_path, "wb") as buffer:
            buffer.write(await file.read())
        
        result = classify_image(temp_path)
        
        # Save result to db.json
        if os.path.exists('db.json'):
            with open('db.json') as f:
                data = json.load(f)
        else:
            data = []
            
        data.append({
            'image_path': temp_path,
            'classification': result,
            'id': len(data+1)
        })
        
        with open('db.json', 'w') as f:
            json.dump(data, f)
        
        return JSONResponse(content={'classification': result})
    except Exception as e:
        return JSONResponse(content={'error': str(e)}, status_code=500)

@app.get('/')
async def get_data():
    try:
        with open('db.json') as f:
            data = json.load(f)
        return JSONResponse(content=data)
    except FileNotFoundError:
        return JSONResponse(content=[], status_code=404)
    except Exception as e:
        return JSONResponse(content={'error': str(e)}, status_code=500)
