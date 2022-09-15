#### Thursday, September 15, 2022
We're still having issues with creating a review in deployment. We think it may be an issues with the reviews poller. 
I was able to create and test a unit test (class ReviewTest(TestCase)) which tested the ability to create a movie review. 
#### Wednesday, September 14, 2022
I finally finished the Create A Review Form and I was able to use my original star rating component. The review is associated with a username, it's being saved to the database, and it's being rendered on the page. 
I received some help in setting up the authorization so that a user must be logged in to leave a review, otherwise they are re-routed to the Login/Signup page. 
I pushed/pulled changes to main so that the team can deploy and test out the form on Heroku, but we ran into issues with saving the rating and getting it to show up on the page as well as users remaining logged in after leaving a review. 
#### Monday, September 12, 2022 & Tuesday, September 13, 2022
Worked with a SEIR to modify the jsx so that when a user clicks 'submit review' it will then trigger a pop up that says 'thanks for your review, you can now close this window'. We also tried to remove the event.preventDefault and then add the dismiss-modal to the Submit button in the jsx, but those don't require all three fields to be completed for the rating, and the review doesn't get saved to the page or the database. 
I've decided to instead change my jsx to use react-bootstrap (instead of just bootstrap). I'm trying to piece together the different components from the website including the modal, form validation, and using the radio button (the star component I had previously doesn't seem to work, I'm having issues with rendering), my plan is to use the radio buttons as the rating button for now so that I can make sure everything is working before researching how to incorporate a star rating component. 
#### Friday, September 09, 2022
The 'submit review' button is still not closing out the pop up. Once someone clicks on 'submit review' I will try to re-route the page either back back to the movie detail page (or to the home page as a worst case scenario). I researched this and came across the useNavigate method. 
I also am trying to implement redirecting users to the login/signup page if they are not currently logged in before they can leave a review. 
#### Thursday, September 08, 2022
The submit button on the Create a Review form is not working. I can see the data is being submitted based on the information rendered in the console as well as in Django Admin, but I cannot get the pop up window to go away after clicking 'Submit Review'.
Worked on making it mandatory to complete all 3 fields before submitting a review (star rating, headline, post). 
#### Tuesday, September 06, 2022 & Wednesday, September 07, 2022
Worked with Kelly and Matthew to pull in registered users usernames so that when someone creates a review, it will be associated with that user and will display their username and review on the portion of the website where we list all user reviews. 
Pushed/pulled changes to/from the main branch. 
The team begin working on deployment. 
#### Friday, September 02, 2022
The team worked on merging changes to main and pulling changes from main and then merging it over to their respective working branches. 
I continued working on the star rating component to see if I can clean up the code to make it easier to read. I also added the headline and review box to the pop up. 
#### Thursday, September 01, 2022
Each team member pulled changes from the main branch in gitlab to their respective working branches. 
Deleted all Docker images using the docker image prune --all command. 
Created the .env file
Figured out how to place the Create a Review Button on the Movie Detail page to trigger the modal pop up.  
#### Wednesday, August 31, 2022
I learned that I'm supposed to use the react-1 container in Docker to install react-icons not the Windows Terminal. I also figured out I need to install it in the ghi/src directory. So now, I finally have it installed, and can use a star rating icon, which will make the code look much cleaner. I refactored the star rating component. 
#### Tuesday, August 30, 2022
I tried to install react-icons, but I can't seem to use it in my jsx. I tried to import it onto my page and I'm receiving the error message that it's not installed. I watched YouTube videos and read some articles about creating a star rating component, I think I have it installed and am referencing it correctly. For the time being I'm going to use the svg path source code to render stars on the page. I've created it so that the stars are initially gray and when users hover over the star, it will turn gold up and including the star that is clicked. 
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