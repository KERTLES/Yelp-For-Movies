from django.urls import path
from .views import api_list_reviews

urlpatterns = [
    path("reviews/", api_list_reviews, name="list_reviews"),
    path("reviews/<str:movie_id>/", api_list_reviews, name="review"),
    # path("create/<str:movie_id>/", api_list_reviews, name="create"),

]
