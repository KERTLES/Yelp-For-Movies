from django.test import TestCase, Client
from .models import Review, Movie, UserVO


# Create your tests here.
class MovieTest(TestCase):
    def setUp(self):
        self.movie = Movie.objects.create(
            imdb_id="tt12864156",
            title="Pokemon Movie",
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
        data = {"imdb_id": "tt150231", "title": "Mean Girls"}
        self.client.post(
            "/api/movies/",
            data,
            content_type="application/json",
        )
        response_movie = self.client.get("/api/movies/tt150231/")
        content = response_movie.json()
        self.assertEqual(content["imdb_id"], data["imdb_id"])

    def test_Getspecificmovie(self):
        response = self.client.get(f"/api/movies/{self.movie.imdb_id}/")
        content = response.json()
        self.assertEqual(content["imdb_id"], self.movie.imdb_id)


# tests if this gets a list of reviews from the database
class reviewsTester(TestCase):
    def setUp(self):
        self.movie = Movie.objects.create(
            imdb_id="tt1745960",
            title="Some Movie",
        )
        self.user = UserVO.objects.create(user_name="tatasddasdime")
        self.review = Review.objects.create(
            title="this is a review",
            post="jfahfuehaj, ghgfusajnvf, aujhfiuedgbjb. Goljfa",
            rating=5,
            movie=self.movie,
            user=self.user,
        )

    def test_get_list_reviews(self):
        response = self.client.get("/api/create/review/")
        content = response.json()
        self.assertEqual(response.status_code, 200)
        for review in content:
            if review["title"] == self.review.title:
                self.assertEqual(review["id"], self.review.id)


# create a movie review
class ReviewTest(TestCase):
    def setUp(self):
        self.movie = Movie.objects.create(
            imdb_id="tt11245972",
            title="Scream",
        )

        self.user = UserVO.objects.create(
            user_name="theGordonRamsay",
        )

        self.review = Review.objects.create(
            movie=self.movie,
            user=self.user,
            title="Absolute Rubbish",
            post="So bad, should have left this franchise alone...",
            rating=1,
        )

    def test_create_review(self):
        data = {
            "user_name": "theGordonRamsay",
            "imdb_id": "tt11245972",
            "title": "Absolute Rubbish",
            "post": "So bad, should have left this franchise alone...",
            "rating": 1,
        }
        client = Client()
        response = client.post(
            "/api/create/review/",
            data,
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)
