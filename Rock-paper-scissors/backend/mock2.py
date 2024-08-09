from inference_sdk import InferenceHTTPClient

filename = 'uploads/0a3UtNzl5Ll3sq8K.png'

CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="iBQOHdH1RIkiCmXTzFLn"
)

result = CLIENT.infer(filename, model_id="rock-paper-scissors-3/3")