import json

from django.http import HttpResponse

from CHatGPT.ChatGPT import OpenChat, chat
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def getResponse(request, *args, **kwargs):
    try:
        # Obtenir les données JSON du corps de la requête
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        if request.method=="POST":
        # Passer les données à la fonction OpenChat
            response = OpenChat(body_data)

        # Retourner la réponse comme HttpResponse
            return HttpResponse(response)

    except Exception as e:
        # Retourner une réponse avec le message d'erreur
        return HttpResponse(str(e))

@csrf_exempt
def getResponseChat(request, *args, **kwargs):
    try:
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        response = chat(body_data)
        return HttpResponse(response)
    except Exception as e:
        return HttpResponse(str(e))

