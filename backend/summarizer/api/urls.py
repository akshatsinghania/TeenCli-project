from django.urls import path

from . import views

urlpatterns = [
    path('summarize/<str:pk>', views.Summarize, name='summarize'),

]
