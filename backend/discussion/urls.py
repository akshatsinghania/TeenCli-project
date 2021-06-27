from django.urls import path

from . import views

urlpatterns = [
    path('', views.discussions, name='index'),
    path('', views.discussions, name='index',post),
    path('discussion/:id/finish', views.discussion, name='index'),
    path('discussion/:id/newmessage', views.discussion, name='index'),
    path('/:id/summarize', views.discussions, name='index'),
]