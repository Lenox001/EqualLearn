from django.contrib.auth import get_user_model, authenticate
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser  # Make sure this is your custom user model

# SignUp View
@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not username or not email or not password:
            return Response({"message": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create a new user using the custom user model
        user = get_user_model().objects.create_user(username=username, email=email, password=password)
        user.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

# Login View (returns JWT token)
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"message": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    # Authenticate the user
    user = authenticate(username=username, password=password)
    
    if user is not None:
        # Create JWT tokens for the user
        refresh = RefreshToken.for_user(user)
        return Response({
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
        })
    
    return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

# Fetch user details (only authenticated users)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    user_data = {
        "username": user.username,
        "email": user.email,
        "is_student": user.is_student,
        "is_instructor": user.is_instructor,
    }
    return Response(user_data, status=200)

# Update user details
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user_details(request):
    user = request.user
    data = request.data

    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)
    user.is_student = data.get("is_student", user.is_student)
    user.is_instructor = data.get("is_instructor", user.is_instructor)
    user.save()

    return Response({"message": "Profile updated successfully."}, status=200)
