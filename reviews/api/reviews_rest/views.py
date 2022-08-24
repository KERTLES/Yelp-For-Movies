from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods

from common.json import ModelEncoder

from .models import Review, Movie
# Create your views here.


class MovieEncoder(ModelEncoder):
    model = Movie
    properties = [
        "imdb_id",
        # "title",
        # "year",
        # "rated",
        # "released",
        # "runtime",
        # "genre",
        # "director",
        # "writer",
        # "actors",
        # "plot"
    ]


class ReviewEncoder(ModelEncoder):
    model = Review
    properties = [
        "title", 
        "post", 
        "movie"
    ]

    encoders = {
        "movie": MovieEncoder(),
    }
    


@require_http_methods(["GET", "POST"])
def api_list_reviews(request, movie_id=None):
    if request.method == "GET":

        if movie_id != None:
            try:
                reviews = Review.objects.get(id=movie_id)
                # movie = Movie.objects.get(imdb_id=reviews.imdb_id)

            except Movie.DoesNotExist:
                return JsonResponse(
                    {"message": "invalid movie id"}
                )
            return JsonResponse(
                reviews,
                encoder=ReviewEncoder,
                safe=False
            )

        else:
            reviews = Review.objects.all()
            return JsonResponse({"reviews:": reviews}, encoder=ReviewEncoder)
    
    # else: #POST         
    #     content = json.loads(request.body)
    #     try:
    #         movies = Movie.objects.get

    #     except Movie.DoesNotExist:
    #         return JsonResponse (
    #             {"message":  "Movie does not exist"}
    #             status=400,
    #         )
        
    #         new_review = Review.objects.create(**content)
    #         return JsonResponse(
    #             new_review,
    #             encoder = ReviewEncoder,
    #             safe=False,
    #         )