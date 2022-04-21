from django.db import models
from django.contrib.auth.models import User


class Avatar(models.Model):
    VOICE_CHOICES = [
        ("Ivy", "Ivy"),
        ("Joanna", "Joanna"),
        ("Kendra", "Kendra"),
        ("Kimberly", "Kimberly"),
        ("Salli", "Salli"),
        ("Joey", "Joey"),
        ("Justin", "Justin"),
        ("Kevin", "Kevin"),
        ("Matthew", "Matthew"),
        ("Brian", "Brian"),
    ]
    starting_prompt = models.TextField()
    voice = models.CharField(max_length=50, choices=VOICE_CHOICES)
    avatar_img = models.ImageField(blank=True, upload_to="avatars")


class Conversation(models.Model):
    notes = models.CharField(max_length=255, blank=True)
    is_favorite = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="convos")
    avatar = models.ForeignKey(
        Avatar, on_delete=models.CASCADE, related_name="avatar_convos"
    )


class Line(models.Model):
    text = models.TextField()
    time = models.TimeField(auto_now_add=True)
    is_favorite = models.BooleanField(default=False)
    conversation = models.ForeignKey(
        Conversation, on_delete=models.CASCADE, related_name="lines"
    )
    audio_url = models.URLField(blank=True)
