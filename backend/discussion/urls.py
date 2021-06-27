from django.urls import path

from . import views

urlpatterns = [
    # url to create the summary
    path("finish/<str:id>", views.Finish, name="finish"),
    path("", views.Get, name="get"),
    # url to create a discussion room; on progress
    path("", views.Create, name="create"),
]