from django.urls import path
from .views import api_list_reviews

urlpatterns = [
    path("reviews/", api_list_reviews, name="list_reviews"),
    path("reviews/<int:movieId>/", api_list_reviews, name="review_by_id"),
    path("create/<int:movieId>/", api_list_reviews, name="create"),

]
