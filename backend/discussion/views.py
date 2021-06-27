from re import L
from django.http.response import HttpResponse
from django.shortcuts import render
import os
import openai

from django.http import JsonResponse

# this is needed for the hiding of open api. i will tell you how to configure it

# import environ
# # Initialise environment variables
# env = environ.Env()
# environ.Env.read_env()

# openai.api_key = env("OPENAI_API_KEY")


from firebase import Firebase

config = {
  "apiKey": "AIzaSyCDSHRTAt4klqbgezITradCwvCr1DUQgBk",
  "authDomain": "teencli-project.firebaseapp.com",
  "databaseURL": "https://teencli-project-default-rtdb.firebaseio.com",
  "projectId": "teencli-project",
  "storageBucket": "teencli-project.appspot.com",
  "messagingSenderId": "172321504327",
  "appId": "1:172321504327:web:f34fed74a9b44c2699c562"
}

firebase = Firebase(config)

db = firebase.database()


def Finish(request, id):

    # Setting completed to true
    data = {"completed": True}
    db.child("discussions").child(id).update(data)

    # Getting the msgs and converting it into prompt format
    string = "Convert my short hand into a first-hand account of the discussion:\n\n"
    msgs = db.child("discussions/" + id).child("messages").get()
    for msg in msgs.each():
        string += msg.val()['from'] + ": " + msg.val()['message'] + "\n"
    print(string)

    # Giving the string to openAI
    # response = openai.Completion.create(
	# engine="davinci-instruct-beta",
	# prompt=string,
	# temperature=0.7,
	# max_tokens=64,
	# top_p=1.0,
	# frequency_penalty=0.0,
	# presence_penalty=0.0
	# )
    # summary = response.choices[0].text

    # Updating summary
    # db.child("discussions/" + id).update({'summary': summary})

    return JsonResponse({"status": "Success"})

def Message(request, id):
    pass