from boto3 import Session


MY_BUCKET = "timemachine-tts-output"


def synthesize(output_text, voice):
    session = Session(profile_name="default")
    polly = session.client("polly")

    response = polly.start_speech_synthesis_task(
        Engine="neural",
        OutputFormat="mp3",
        OutputS3BucketName=MY_BUCKET,
        Text=output_text,
        OutputS3KeyPrefix="test",
        VoiceId=voice,
    )

    output_url = response["SynthesisTask"]["OutputUri"]
    return output_url


# def stream(output_text, voice):
#     session = Session(profile_name="default")
#     polly = session.client("polly")

#     response = polly.synthesize_speech(
#         Engine="neural",
#         OutputFormat="mp3",
#         Text=output_text,
#         VoiceId=voice,
#     )
#     output_stream = response["AudioStream"].read()
#     # output_stream.seek(0)
#     return output_stream
