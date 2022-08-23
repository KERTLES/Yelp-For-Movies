# from operator import truediv
from pickle import TRUE
# from pyexpat import model
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Review(models.Model):
    title = models.CharField(max_length=200)
    post = models.TextField
    imdbID = models.OneToOneField("MovieVO", related_name="+", on_delete=models.CASCADE) 
    #if movie id is deleted, we want to delete all reviews associated with movie (?) 

class MovieVO(models.Model): 
    imdbID = models.CharField(max_length=200, unique=TRUE)
    name = models.CharField(max_length=200)
    





class Rating(models.Model):
    value = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1),MaxValueValidator(5)]
    )
    review = models.ForeignKey(
        "Review",
        related_name = "ratings",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return str(self.review) + " rating:" + str(self.value)