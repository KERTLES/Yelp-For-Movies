#### Wednesday, August 31, 2022
I learned that I'm supposed to use the react-1 container in Docker to install react-icons not the Windows Terminal 😶‍🌫️. I also had to install it in the ghi/src directory.  So now, I finally have it installed, and can use star rating icons. 
#### Tuesday, August 30, 2022
I tried to install react-icons, but I can't seem to use it in my jsx. I tried to import it onto my page and I'm receiving the error message that it's not installed. I watched YouTube videos and read some articles about creating a star rating component, I think I have it installed and am referencing it correctly. For the time being I'm going to use the svg source code on the boo

Bootstrap's documentation lists how to create a pop up window (modal), I'm using that code snippet in my jsx. 
#### Monday, August 29, 2022
Started working on the Create Review Form. I watched a few YouTube videos on creating a form and what React Hooks are since the team decided we should use function-based components for our project. The form will need to be a pop up and have 1. a rating component, 2. a headline (something short and catchy, similar to the review headlines on Amazon), 3. a textbox for someone to write their post, 4. a submit button, and 5. a button in the upper right hand corner to exit out of the pop up. 

#### Thursday, August 25, 2022
Kelly and I revised our models, views and urls paths again. I started working on the frontend - Create a Review Form. I'm not quite sure how to use a React Hook, but I tried coding along with a YouTube video I found. 
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
We've split our project out into 3 parts - 
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