from api import views
from django.urls import path

urlpatterns=[
    path('users/',views.get_users,name='get_users'),
    path('users/create/',views.create_user,name='create_user'),
    path('users/<int:pk>',views.user_detail,name='user_detail'),
]