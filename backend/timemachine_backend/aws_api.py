from boto3 import Session
from botocore.exceptions import BotoCoreError, ClientError
from rest_framework.response import Response


MY_BUCKET = "timemachine-tts-output"


def synthesize(request, output_text):
    session = Session(profile_name="default")
    polly = session.client("polly")

    response = polly.start_speech_synthesis_task(
        Engine="neural",
        OutputFormat="mp3",
        OutputS3BucketName=MY_BUCKET,
        Text=output_text,
        OutputS3KeyPrefix="test",
        VoiceId="Matthew",
    )

    return Response(response)
