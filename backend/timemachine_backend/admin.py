from django.contrib import admin

from timemachine_backend.models import Conversation, Line, Avatar

admin.site.register([Conversation, Line, Avatar])
