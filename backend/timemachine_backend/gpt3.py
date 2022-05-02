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


@api_view(http_method_names=["POST"])
def gpt3(request):
    id = request.data.get("id")
    conversation = Conversation.objects.get(id=id)
    user_text = request.data.get("user_text")
    prompt = conversation.avatar.starting_prompt
    if conversation.lines == []:
        Line(input_text=prompt, conversation=conversation).save()
    prompt += user_text
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        user=str(request.user.id),
        temperature=0.95,
        max_tokens=250,
        top_p=1,
        frequency_penalty=0.3,
        presence_penalty=0.8,
        stop=[" Human:", " AI:"],
    )
    output_text = response.choices[0].text
    next = Line(
        input_text=user_text,
        output_text=output_text,
        conversation=conversation,
    ).save()
    synthesize(request, output_text)
    return Response(response)
