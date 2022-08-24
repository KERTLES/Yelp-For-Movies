
# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

import json


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


class ReviewsEncoder(ModelEncoder):
    model = Review
    properties = ["title", "post", "movie"]

    encoders = {"movie": MovieEncoder()}


@require_http_methods(["GET", "POST"])
def api_list_reviews(request, movieId=None):
    if request.method == "GET":

        if movieId != None:
            try:

                reviews = Review.objects.filter(movie=movieId)

            except Movie.DoesNotExist:
                return JsonResponse(
                    {"message": "invalid movie id"}
                )
            return JsonResponse(
                reviews,
                encoder=ReviewsEncoder,
                safe=False
            )
        else:

            reviews = Review.objects.all()
            return JsonResponse({"reviews:": reviews}, encoder=ReviewsEncoder)

    else:
        content = json.loads(request.body)
        try:
            movie = Movie.objects.get(id=movieId)

        except Movie.DoesNotExist:
            return JsonResponse(
                {
                    "message": "invalid movie id",

                },
                status=400
            )
        content["movie"] = movie
        review = Review.objects.create(**content)
        return JsonResponse(
            review, encoder=ReviewsEncoder, safe=False
        )
