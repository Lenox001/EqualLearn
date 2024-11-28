from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('api/courses/', views.course_list, name='course-list'),
    path('api/courses/<slug:slug>/', views.course_detail, name='course-detail'),
]

# Add media URL pattern when in DEBUG mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
