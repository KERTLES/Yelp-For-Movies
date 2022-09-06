#### Thursday, August 25, 2022
Kelly and I revised our models, viewss and urls paths again. I started working on the frontend - Create a Review Form. I'm not quite sure how to use a React Hook, but I tried coding along with a YouTube video I found. 
#### Wednesday, August 24, 2022
The team has decided to use React Hooks for the front-end portion. I've started to do some research into React Hooks by reading the exploration and watching YouTube videos. 

Kelly & I revised our models and views and continued to test our RESTful API calls in Insomnia & Django Admin. 
#### Tuesday, August 23, 2022
Kelly & I continued working on our models and begin working on our views and urls.py. We tested our RESTful API calls in Insomnia & Django Admin. 


#### Monday, August 22, 2022
Kelly & I worked on setting up our reviews_project & reviews_rest:

- updated reviews_project/settings.py to 
    - include reviews_rest and corsheaders in Installed Apps
    - include corsheaders in middleware
    - add CSRF trusted origins, CORS allowed origins, CORS allow credentials, and DJWTO

- updated reviews_project/urls.py to include the api path
- we also pair programmed to set up the models for reviews and we started to identify the key pieces of our reviews microservice
#### Friday, August 19, 2022
We created each of our project directory and files, as well as our 'yelp-for-movies' docker-compose.yml file. 
We also received feedback from Daniel regarding our project idea. 
The team decided that instead of saving all the movies into our database, that instead it would be better to make the API call directly from the front-end. We will only save the movie to the database when a user creates a review for a specific movie. 
#### Thursday, August 18, 2022
We've broken our project out into 3 parts - 
- accounts (Matthew & Lander)
- reviews (Kelly & me)
- movies (Myo)

We decied on our MVPs and our stretch-goals for the project. 

We're also thinking that the three parts should be their own microservice. The Reviews microservice will be tricky since I think we'll need to poll data from the account (people signing up for an account so that they can create reviews) and we'll also need to be able to poll data from the movies so that each review is associated with a movie.
#### Wednesday, August 17, 2022
We finalized our README (for now), wireframing, and docs. 
Everyone created their own branch to work on and we practiced some git commands - merge, pull, push, and switching between main and our own branch. 
#### Tuesday, August 16, 2022
We started working on our:
- wireframing (Nikansha), 
- README, and 
- docs: apis.md, data-model.md, ghi.md, integrations.md. 

Kelly registerd for the API key for The Movie Database(TMDB)
#### Monday, August 15, 2022
We were assigned our groups. Kelly, Lander, Myo, Matthew, and I brainstormed project ideas and decided on a Movies Review Website, kind of like a yelp for movies - where users can write their own reviews for a movie and users can compare those reviews with reviews that we pull from other movie review websites just as IMDB or Rotten Tomatoes. We also researched using various API's, unfortunately, the IMDB API is not open-sourced or free. 