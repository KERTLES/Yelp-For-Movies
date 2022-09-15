## Days 1-2
    In the first couple group meetings, we decided on a project idea and went with a movie review site because we thought there would be a couple movie apis that could be easily accessible. The following day we made a rough outline of what each page looks like and included it in our project sketch. We also figured out a list of features and services the site would provide. The feedback we got was that in our list of features, the MVP goals vs stretch goals weren't clear enough so we decided that a movie review site should at the very least: 
    - Have a list of movies to choose from 
    - Information about each movie 
    - Able to show reviews for each movie if they exist.
    - Able to create reviews for a particular movie if logged in. 
    - A way to keep track of users, logging in/logging out, etc, so a account service. 
## Days 3-4
    On day three we distributed pairs to each of the two aspects of the project for the backend - Reviews, and Accounts microservice. Nikansha and I are working on the reviews microservice, Lander and Matthew are working on the Accounts microservice, and Myo is working on the frontend using the movie API. On Day 4, Andrew checks-in on our project idea and Daniel helps us clarify our project plans with the movie api. In the end he said that we didn't need another service to store the movies we pull from the movie api site and instead just handle it on the frontend. 

## 8/19/2022
    Today we: 
    Created the review folder for its own microservice. 
    Created the requirement.txt file and Docker file.dev inside of the review project folder and set up our manage.py commands for making migrations and migrating. 
    After adding the commands, we successfully created the review_project folder with all the dependencies as well as the reviews apps folder. 

# 8/22/2022 - Day 1 of working on Reviews microservice
    Configurations: 
    - Added the reviews_rest application to the installed apps variable in settings.py
    - Created Reviews and movieVO model in models.py
    - Changed the name of our databases for each service to 'reviews' and 'accounts' in Docker compose yaml     
      file and resolved the module not found error in the manage.py file by inserting the correct path to the project settings directory. We included the movie miroservice in the docker compose file just in case since it wouldn't effect how our services ran. 
    - But instead of treating the movie objects as value objects, we created just a regular movie model in our 
      reviews microservice since movie doesn't have its own microservice now as we're not storing all movies we pull in our database. 

# 8/23/2022 
    Today we successfully created a view function that listed reviews on the backend and set up the urls.py path for it. I'm unsure if it should be filtered by movie id or imdb_id. Had a little discussion with partner to sort it out and decided on movie_id temporarily. I also made some changes to the movie model because we just needed to store the movie imdb_id and title to identify each movie and filter the list of reviews and all the other information is nonessential. With this modification, I also realized that the review model was set up incorrectly. Instead of naming the property 'movie', I named it imdb_id and created a foreign key back to the movie model. However, this caused several errors and a lot of confusion because I would've had to call the imdb_id from the movie model like this- imdb_id["imdb_id"] instead of movie["imdb_id"] like we had intended. After fixing this, 




 



