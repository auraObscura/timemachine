from rest_framework import viewsets, permissions

from timemachine_backend.models import Conversation, Line, Avatar, User
from timemachine_backend.serializers import (
    ConversationSerializer,
    LineSerializer,
    AvatarSerializer,
    UserSerializer,
)


# internal model views
class ConversationViewSet(viewsets.ModelViewSet):
    serializer_class = ConversationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self):
        return Conversation.objects.filter(user=self.request.user)


class LineViewSet(viewsets.ModelViewSet):
    serializer_class = LineSerializer

    def get_queryset(self):
        return Line.objects.filter(conversation=self.request.data)


class AvatarViewSet(viewsets.ModelViewSet):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)
