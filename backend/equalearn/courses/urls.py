from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .import views



urlpatterns = [
    path("courses/", views.course_list, name="course_list"),
    path("courses/enrolled/",views.enrolled_courses,name="enroll"),
    path("courses/<slug:slug>/", views.course_detail, name="course_detail"),
    path("courses/<slug:slug>/enroll/", views.enroll_in_course, name="enroll_in_course"),
    
]


# Add media URL pattern when in DEBUG mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
