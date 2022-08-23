from django.contrib import admin

from .models import Review, Movie
# Register your models here.
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass



