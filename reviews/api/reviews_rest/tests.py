from django.test import TestCase
from .models import Review, Movie, UserVO
import json
import os

# Create your tests here.
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