from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Course, Enrollment
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required


def course_list(request):
    courses = Course.objects.all()
    courses_data = [
        {
            "title": course.title,
            "description": course.description,
            "price": str(course.price),
            "image": request.build_absolute_uri(course.image.url) if course.image else None,
            "slug": course.slug,
        }
        for course in courses
    ]
    return JsonResponse(courses_data, safe=False)


def course_detail(request, slug):
    course = get_object_or_404(Course, slug=slug)
    course_data = {
        "title": course.title,
        "description": course.description,
        "price": str(course.price),
        "image": request.build_absolute_uri(course.image.url) if course.image else None,
    }
    return JsonResponse(course_data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def enroll_in_course(request, slug):
    course = get_object_or_404(Course, slug=slug)
    if Enrollment.objects.filter(user=request.user, course=course).exists():
        return Response({"error": "Already enrolled in this course."}, status=400)

    Enrollment.objects.create(user=request.user, course=course)
    return Response({"success": "Successfully enrolled in the course!"}, status=200)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def enrolled_courses(request):
    enrollments = Enrollment.objects.filter(user=request.user).select_related("course")
    
    if not enrollments:
        return Response({"message": "No enrolled courses found."}, status=404)

    enrollment_data = [
        {
            "user": enrollment.user.username,
            "course_title": enrollment.course.title,
            "course_description": enrollment.course.description,
            "course_price": str(enrollment.course.price),
            "date_enrolled": enrollment.date_enrolled,
            "course_image": request.build_absolute_uri(enrollment.course.image.url) if enrollment.course.image else None
            
        }
        for enrollment in enrollments
    ]
    return JsonResponse(enrollment_data, safe=False)


