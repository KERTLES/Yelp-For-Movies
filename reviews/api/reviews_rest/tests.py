
from django.test import TestCase
from .views import api_list_movies
from models import Movie
import random
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
    
    def test_get_specific_movie(self):
        response = self.client.get("/api/movies/" + self.movie["imdb_id"])
        content = response.json()
        self.assertEqual(content["imdb_id"],self.movie["imdb_id"])