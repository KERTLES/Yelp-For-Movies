from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class UserVO(models.Model):
    user_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return str(self.user_name)


# class Review(models.Model):
#     title = models.CharField(max_length=200)
#     post = models.TextField(blank=True, null=True) 
#     #if movie id is deleted, we want to delete all reviews associated with movie (?) 
#     rating = models.PositiveSmallIntegerField(blank=True, null=True,
#         validators=[MinValueValidator(1),MaxValueValidator(5)]
#     )
#     user = models.CharField(max_length=50, blank=True, null=True)
#     movie = models.ForeignKey(
#         "Movie", 
#         on_delete=models.CASCADE
#     )
    
#     def __str__(self):
#         return (self.title)


class Movie(models.Model): 
    # imdb_id is from the API
    imdb_id = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=100)
    # plot = models.TextField()
    # year = models.DateField()
    # rated = models.CharField(max_length=100)
    # released = models.DateTimeField(blank=True, null=True)
    # runtime = models.CharField(max_length=50)
    # genre = models.CharField(max_length=100)
    # actors = models.TextField()
    # director = models.CharField(max_length=100)
    # source = models.CharField(max_length=200)

    # value = models.CharField(max_length=50)
    # value = models.FloatField(blank=True)

    # poster = models.URLField(max_length=200)

    def __str__(self):
        return self.title

class Review(models.Model):
    title = models.CharField(max_length=200)
    post = models.TextField(blank=True, null=True)
    movie = models.ForeignKey("Movie", related_name= "Review", on_delete=models.CASCADE) 
    #if movie id is deleted, we want to delete all reviews associated with movie (?) 
    rating = models.PositiveSmallIntegerField(blank=True, null=True,
        validators=[MinValueValidator(1),MaxValueValidator(5)]
    )
    date = models.DateField(auto_now=True)
    # user = models.CharField(max_length=50, blank=True, null=True)

    user = models.ForeignKey("UserVO", related_name="Review", on_delete=models.CASCADE)


    def __str__(self):
        return str(self.user.user_name) + " review for " + str(self.movie.title)
