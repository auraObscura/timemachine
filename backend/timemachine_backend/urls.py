from rest_framework import routers
from django.urls import path, include
from timemachine_backend.views_auth import handle_login, handle_logout
from timemachine_backend.views import (
    ConversationViewSet,
    LineViewSet,
    AvatarViewSet,
    UserViewSet,
)
from timemachine_backend.gpt3 import gpt3
from timemachine_backend.aws_api import synthesize

r = routers.DefaultRouter()
r.register("conversations", ConversationViewSet, basename="conversation")
r.register("lines", LineViewSet, basename="line")
r.register("avatars", AvatarViewSet, basename="avatar")
r.register("users", UserViewSet, basename="user")

urlpatterns = [
    path("", include(r.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
    path("generate/", gpt3, name="generate"),
    path("speech/", synthesize, name="speech"),
]
