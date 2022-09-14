
from django.test import TestCase
from .views import api_list_movies
from .models import Movie
from .models import Review, Movie, UserVO
import json
import os

# Create your tests here.


class MovieTest(TestCase):
    def setUp(self):

        self.movie = Movie.objects.create(
            imdb_id='tt12864156', title='Pokemon Movie'
        )

# tests if this gets a list of movies from the database
    def test_get_list_movies(self):
        response = self.client.get("/api/movies/")
        content = response.json()
        self.assertEqual(response.status_code, 200)
        for movie in content["movies"]:
            if movie["title"] == self.movie.title:
                self.assertEqual(movie["imdb_id"], self.movie.imdb_id)

    def test_create_movie(self):
        data = {
            "imdb_id": "tt150231",
            "title": "Mean Girls"
        }
        response = self.client.post(
            "/api/movies/", data, content_type="application/json",)
        response_movie = self.client.get("/api/movies/tt150231/")
        content = response_movie.json()
        self.assertEqual(content["imdb_id"],data["imdb_id"])
    
    def test_Getspecificmovie(self):
        response = self.client.get(f'/api/movies/{self.movie.imdb_id}/')
        content = response.json()
        self.assertEqual(content["imdb_id"],self.movie.imdb_id)



class reviewsTester(TestCase):
    def setUp(self):
        self.movie = Movie.objects.create(imdb_id = "tt1745960", title = "Some Movie")
        self.user = UserVO.objects.create(user_name = "tatasddasdime")
        self.review = Review.objects.create(
            title= "this is a review", 
            post = "jfahfuehaj, ghgfusajnvf, aujhfiuedgbjb. Goljfa", 
            rating = 5, 
            movie= self.movie,
            user = self.user
        )

    def test_get_list_reviews(self):
        response = self.client.get("/api/create/review/")
        print(response)
        content = response.json()
        self.assertEqual(response.status_code,200)
        for review in content:
            if review["title"] == self.review.title:
                self.assertEqual(review['id'], self.review.id)
