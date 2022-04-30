from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from timemachine_backend.models import Conversation, Line, Avatar, User


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ["id", "notes", "is_favorite", "date", "user", "avatar", "lines"]


class LineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Line
        fields = [
            "id",
            "input_text",
            "output_text",
            "time",
            "is_favorite",
            "conversation",
            "audio_url",
        ]


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avatar
        fields = [
            "id",
            "name",
            "starting_prompt",
            "voice",
            "avatar_img",
            "avatar_convos",
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "convos"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)
