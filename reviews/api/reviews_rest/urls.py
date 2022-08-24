from django.urls import path
from .views import api_list_reviews, api_show_review, api_list_movies

urlpatterns = [
    path("movies/", api_list_movies, name="list_movies"),
    path("reviews/", api_list_reviews, name="list_reviews"), #GET
    path("movies/<int:movie_id>/", api_list_reviews, name="review_by_id"), #GET all reviews for one movie
    path("reviews/<int:movie_id>/", api_list_reviews, name="create_review"), #POST

    path("reviews/edit/<int:pk>/", api_show_review, name="edit_review"), #PUT
    path("reviews/delete/<int:pk>/", api_show_review, name="delete_review"), #DELETE
]
