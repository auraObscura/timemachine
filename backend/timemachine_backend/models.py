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
    name = models.CharField(max_length=50)
    life = models.CharField(max_length=50, blank=True)
    description = models.TextField(blank=True)
    starting_prompt = models.TextField()
    voice = models.CharField(max_length=50, choices=VOICE_CHOICES)
    avatar_img = models.ImageField(blank=True, upload_to="avatars")

    def __str__(self):
        return f"{self.name}"


class Conversation(models.Model):
    notes = models.CharField(max_length=255, blank=True)
    is_favorite = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="convos", blank=True
    )
    avatar = models.ForeignKey(
        Avatar, on_delete=models.CASCADE, related_name="avatar_convos"
    )

    def __str__(self):
        return f"{self.avatar} on {self.date}"


class Line(models.Model):
    input_text = models.TextField()
    output_text = models.TextField(blank=True)
    time = models.TimeField(auto_now_add=True)
    is_favorite = models.BooleanField(default=False)
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="lines",
        blank=True,
    )
    audio_url = models.URLField(blank=True)

    def __str__(self):
        return f"{self.input_text}\n{self.output_text}"
