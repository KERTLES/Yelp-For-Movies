
from django.shortcuts import render
from django.http import JsonResponse
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


class ReviewsEncoder(ModelEncoder):
    model = Review
    properties = ["title", "post", "imdb_id"]

    encoders =  {"imdb_id": MovieEncoder()}
    


@require_http_methods(["GET", "POST"])
def api_list_reviews(request, movie_id):
    if request.method == "GET":

        if movie_id != None:
            try:
                
                reviews = Review.objects.get(imdb_id=movie_id)
                # movie = Movie.objects.get(imdb_id=reviews.imdb_id)

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

    # else:
    #     content = json.loads(request.body)
    #     try:
    #         movie = Movie.objects.get(imdb_id=movie_id)
    #         content["imdb_id"] = movie
    #     except Movie.DoesNotExist:
    #         return JsonResponse(
    #             {
    #                 "message": "invalid movie id",

    #             },
    #             status=400
    #         )

    #     review = Review.objects.create(**content)
    #     return JsonResponse(
    #         review, encoder=ReviewsEncoder, safe=False
    #     )
