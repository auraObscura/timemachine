import openai
import environ
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Line

env = environ.Env()
environ.Env.read_env()
openai.api_key = env("OPENAI_API_KEY")

start_sequence = "\nAI:"
restart_sequence = "\nHuman: "


@api_view(http_method_names=["POST"])
def gpt3(request):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ",
        temperature=0.95,
        max_tokens=250,
        top_p=1,
        frequency_penalty=0.3,
        presence_penalty=0.8,
        stop=[" Human:", " AI:"],
    )
    Line(text=response.choices[0].text).save()
    return Response(response)
