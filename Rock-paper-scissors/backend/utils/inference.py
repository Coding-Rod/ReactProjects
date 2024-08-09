from inference_sdk import InferenceHTTPClient

from decouple import config

CLIENT = InferenceHTTPClient(
    api_url=config('API_URL'),
    api_key=config('API_KEY')
)

def classify_image(image_path):
    # This function should classify the image and return "rock", "paper", or "scissors"
    return CLIENT.infer(
        image_path,
        model_id="rock-paper-scissors-sxsw/14"
    )
