import openai
import environ
from rest_framework.decorators import api_view
from timemachine_backend.serializers import ConversationSerializer
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
    user = request.user.username
    conversation = Conversation.objects.get(id=id)
    input_text = request.data.get("user_text")
    user_text = f" {restart_sequence} {input_text}"
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
        stop=[f" Human:", f" {conversation.avatar.name}:"],
    )
    output_text = response.choices[0].text.split(":")[-1]
    next = Line(
        input_text=user_text,
        output_text=output_text,
        conversation=conversation,
    )
    next.audio_url = synthesize(output_text, conversation.avatar.voice)
    next.save()
    my_data = {
        "conversation": ConversationSerializer(instance=conversation).data,
    }
    return Response(data=my_data, status=200)
