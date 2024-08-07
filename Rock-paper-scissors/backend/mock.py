import os
from inference_sdk import InferenceHTTPClient

filename = '0a3UtNzl5Ll3sq8K.png'

CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="iBQOHdH1RIkiCmXTzFLn"
)

result = CLIENT.infer(
    os.path.join('uploads', filename),
    model_id="rock-paper-scissors-sxsw/14"
)

print(result)