import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout


def error_on_request(em):
    return JsonResponse({"error": em}, status=400)


def bad_request():
    return error_on_request("bad request")


def handle_login(request):
    try:
        if request.method == "POST":
            data = json.loads(request.body)

            username = data.get("username")
            password = data.get("password")

            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return JsonResponse(data={"username": user.username}, status=200)

    except Exception as e:
        return error_on_request(str(e))

    return bad_request()


def handle_logout(request):
    try:
        if request.method == "POST":
            logout(request)
            return JsonResponse(data={"success": "you have logged out!"}, status=200)

    except Exception as e:
        return error_on_request(str(e))

    return bad_request()
