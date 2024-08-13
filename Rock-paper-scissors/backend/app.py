from fastapi import FastAPI, File, UploadFile, Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from werkzeug.utils import secure_filename
import os
import json
from utils.inference import classify_image

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
        print(file)
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
            'image_path': temp_path.split('/')[-1],
            'classification': result,
            'id': len(data+1)
        })
        
        with open('db.json', 'w') as f:
            json.dump(data, f)
        
        return JSONResponse(content={'classification': result})
    except Exception as e:
        return JSONResponse(content={'error': str(e)}, status_code=500)

@app.get('/')
async def get_data(class_names: list[str] = Query(default=[])):
    try:
        with open('db.json') as f:
            data = json.load(f)
        
        if not class_names:
            return JSONResponse(content=data)
        
        def classname_filter(x):
            return x['classification']['predictions'][0]['class'] in [
                class_name.title() for class_name in class_names 
            ]
        
        return JSONResponse(
            content=list(
                filter(
                    lambda x: classname_filter(x),
                    data
                )
            )
        )
    except FileNotFoundError:
        return JSONResponse(content=[], status_code=404)
    except Exception as e:
        return JSONResponse(content={'error': str(e)}, status_code=500)
