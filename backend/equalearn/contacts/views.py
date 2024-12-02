from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Messages

@api_view(['POST'])
def contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not name or not email or not message:
        return Response({"message": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    # Save the contact message in the database
    Messages.objects.create(name=name, email=email, message=message)

    return Response({"message": "Message sent successfully!"}, status=status.HTTP_200_OK)
