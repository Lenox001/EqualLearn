from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Course

def course_list(request):
    courses = Course.objects.all()
    courses_data = [
        {
            "title": course.title,
            "description": course.description,
            "price": str(course.price),
            "image": request.build_absolute_uri(course.image.url) if course.image else None,  # Get the absolute URL for the image
            "slug": course.slug  # Include the slug in the response
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
        "image": request.build_absolute_uri(course.image.url) if course.image else None  # Get the absolute URL for the image
    }
    return JsonResponse(course_data)
