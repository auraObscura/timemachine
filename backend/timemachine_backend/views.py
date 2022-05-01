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
    http_method_names = ["get", "post", "delete"]
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)

    # def get_queryset(self):
    #     user = self.request.user
    #     auth = self.request.auth
    #     print(auth)
    #     if user.is_authenticated:
    #         return Conversation.objects.filter(user=user.pk)

    def get_permissions(self):
        if self.request.method == "GET" or "DELETE":
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),)


class LineViewSet(viewsets.ModelViewSet):
    queryset = Line.objects.all()
    serializer_class = LineSerializer

    # def get_queryset(self):
    #     return Line.objects.filter(conversation=self.request.id)


class AvatarViewSet(viewsets.ModelViewSet):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)
