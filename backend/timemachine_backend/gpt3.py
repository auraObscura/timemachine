import openai
import environ
from rest_framework.decorators import api_view
from rest_framework.response import Response

from timemachine_backend.aws_api import synthesize
from .models import Conversation, Line

env = environ.Env()
environ.Env.read_env()
openai.api_key = env("OPENAI_API_KEY")

start_sequence = "\nAI:"
restart_sequence = "\nHuman: "
# pass convo id and user line text
# def get_user_id(request):
#     (self.request.user)


@api_view(http_method_names=["POST"])
def gpt3(request):
    id = request.data.get("id")
    conversation = Conversation.objects.get(id)
    user_text = request.data.get("user_text")
    prompt = conversation.avatar.starting_prompt
    for line in conversation.lines:
        prompt += line.input_text
        prompt += user_text
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        user=1,
        temperature=0.95,
        max_tokens=250,
        top_p=1,
        frequency_penalty=0.3,
        presence_penalty=0.8,
        stop=[" Human:", " AI:"],
    )
    next = Line(
        output_text=response.choices[0].text,
        input_text=user_text,
        conversation=conversation.id,
    ).save()
    next.audio_url = synthesize(user_text)
    return Response(response)
