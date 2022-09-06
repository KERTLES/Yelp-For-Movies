from django.contrib import admin

from .models import Review, Movie, UserVO
# Register your models here.

@admin.register(UserVO)
class UserVOAdmin(admin.ModelAdmin):
    pass

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass




