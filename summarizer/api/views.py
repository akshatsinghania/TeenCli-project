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


def Summarize(request, pk):
	id = pk
	# msg = db.child("Rooms").child(id).child("messages").get().val()
	# get the msg data and make it a string and pass it to openapi

	# response = openai.Completion.create(
	# engine="davinci-instruct-beta",
	# prompt="",
	# temperature=0.7,
	# max_tokens=64,
	# top_p=1.0,
	# frequency_penalty=0.0,
	# presence_penalty=0.0
	# )

	data = {"summary": "it's just a dummy data"}
	return JsonResponse(data)
