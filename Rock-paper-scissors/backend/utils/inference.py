import os
from inference_sdk import InferenceHTTPClient

CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="iBQOHdH1RIkiCmXTzFLn"
)

def classify_image(image_path):
    # This function should classify the image and return "rock", "paper", or "scissors"
    return CLIENT.infer(
        image_path,
        model_id="rock-paper-scissors-sxsw/14"
    )
