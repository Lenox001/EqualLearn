from django.urls import path
from . import views

urlpatterns = [
    # Token-based authentication views
    path('token/', views.login, name='login'),  # Login route
    path('signup/', views.signup, name='signup'),  # Signup route
    path('userdetails/',views.get_user_details, name='user-details'),
    path('update/', views.update_user_details, name='update-user'),
]
