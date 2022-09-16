###### Days 1-2
    In the first couple group meetings, we decided on a project idea and went with a movie review site because we thought there would be a couple movie apis that could be easily accessible. The following day we made a rough outline of what each page looks like and included it in our project sketch. We also figured out a list of features and services the site would provide. The feedback we got was that in our list of features, the MVP goals vs stretch goals weren't clear enough so we decided that a movie review site should at the very least: 
    - Have a list of movies to choose from 
    - Information about each movie 
    - Able to show reviews for each movie if they exist.
    - Able to create reviews for a particular movie if logged in. 
    - A way to keep track of users, logging in/logging out, etc, so a account service. 
###### Days 3-4
    On day three we distributed pairs to each of the two aspects of the project for the backend - Reviews, and Accounts microservice. Nikansha and I are working on the reviews microservice, Lander and Matthew are working on the Accounts microservice, and Myo is working on the frontend using the movie API. On Day 4, Andrew checks-in on our project idea and Daniel helps us clarify our project plans with the movie api. In the end he said that we didn't need another service to store the movies we pull from the movie api site and instead just handle it on the frontend. 

###### 8/19/2022
    Today we: 
    Created the review folder for its own microservice. 
    Created the requirement.txt file and Docker file.dev inside of the review project folder and set up our manage.py commands for making migrations and migrating. 
    After adding the commands, we successfully created the review_project folder with all the dependencies as well as the reviews apps folder. 

###### 8/22/2022 - Day 1 of working on Reviews microservice
    Configurations: 
    - Added the reviews_rest application to the installed apps variable in settings.py
    - Created Reviews and movieVO model in models.py
    - Changed the name of our databases for each service to 'reviews' and 'accounts' in Docker compose yaml     
      file and resolved the module not found error in the manage.py file by inserting the correct path to the project settings directory. We included the movie miroservice in the docker compose file just in case since it wouldn't effect how our services ran. 
    - But instead of treating the movie objects as value objects, we created just a regular movie model in our 
      reviews microservice since movie doesn't have its own microservice now as we're not storing all movies we pull in our database. 

###### 8/23/2022 
    Today we successfully created a view function that listed reviews on the backend and set up the urls.py path for it. I'm unsure if it should be filtered by movie id or imdb_id. Had a little discussion with partner to sort it out and decided on movie_id temporarily. I also made some changes to the movie model because we just needed to store the movie imdb_id and title to identify each movie and filter the list of reviews and all the other information is nonessential. With this modification, I also realized that the review model was set up incorrectly. Instead of naming the property 'movie', I named it imdb_id and created a foreign key back to the movie model. However, this caused several errors and a lot of confusion because I would've had to call the imdb_id from the movie model like this- imdb_id["imdb_id"] instead of movie["imdb_id"] like we had intended. After fixing this, the view function is able to create the movie object with the imdb_id from the response object before assigning it as a property to content["movie"] and including it in the review object. This is more logical than my original approach. This also got rid of the 'object of type movie is not json serializable' error because now we knew what property to put in the encoder and what properties it didn't expect. The last thing we addded are the view functions to get a list of reviews from the movie_id, get all reviews just to see if the first function was returning the right reviews, and create a review function. 

    I tried starting getting started on the frontend today as well, but ran into an error with react: Module build failed (from ./node_modules/babel-loader/lib/index.js) when trying to run the react container. I tried deleting the node.js file from the ghi, json-lock file, and changing the database variable in settings.py to a postgres database (which turned out to be unrelated). Tried deleting the node and json-lock file again and running npm install. None of these ended up working and the solution was to just pull the shared copy off of main and use that. Nikansha and I then divided up the frontend portion for the reviews microservice. She's doing the form for create a review and I'm returning a list of reviews for each movie. 

###### 8/24/2022
    I fixed some bugs in my code list review backend and create movie function. Then I changed the relationship between my Review model and Movie model to a foreign key with the many to one field. Instead of using a one-to-one key as I did originally, one movie can have many reviews, but a review can only be tied to one movie so I altered the model and made migrations. Afterwards, I helped Nikansha debug the put and delete functions to edit or delete a review. The problem was that the url path was passing one variable while the function parameter expected a different one. Ex: variable in path was '<str:imdb_id>' while variable in parameter name was 'id'. After that we fixed the url path in insomnia and were able to successfully test functions. One annoying blocker we ran into was figuring out how to deal with merge requests and how to avoid manually resolving conflicts because our automatic merge in settings was turned off on vscode. The easiest solution we found was just to use live share and only work on one code source, but then we can only push on one person's terminal and the changes the other person won't show up in gitlab. 

###### 8/25/2022
    Tried to resolve branch issue by first creating a reviews-branch in my local terminal, then using git fetch to track the remote branch in the git repository. This is equivalent to git pull, except it doesn’t actually pull the changes, just tracks the status of the remote branch. 
    After the connection was made, I used Git pull origin -> reviews-branch to pull the changes from the reviews-branch into my reviews branch. Then I switched to my branch and pulled the changes from the reviews branch, resolved conflicts, then pushed my changes back into the review branch. It was difficult, but we managed to figure it out and make it work. I also started watching videos on React hooks to figure out how to translate components to hooks for the list review page for each movie. 
    I need to figure out how to get the imdb_id for a specific movie, then send a separate request to the movie API to request all the reviews for said movie. 
    I ALSO need to check if the review database contains existing movies already for the imdb_id AND if yes, check if there are any reviews created by our users that have a relationship to it as well. Otherwise, create the movie in the database. 

###### 8/26/2022
    Questions for Nikansha - 
    Model alteration suggestions: 
### 1. 
    Should we add foreign keys from the user property in the Review model to the UserVO model so that the review model can access user data and filter reviews by a user property? 
 ### 2. 
    Do we want to include a date property that shows when the review was created/edited? 
    ### 3. The movie api we pull from doesn't have reviews for every single movie. Are we going to only pull critic ratings or movie reviews as well? If it’s both, we need to find another api to pull the reviews from. 

    I spent the rest of the day watching videos on react hooks and successfully using the useEffect() hook to fetch all reviews in the database from the backend. 
    I made a list to display reviews in the frontend as individual boxes/comments in the movie detail page. 
    I also included dummy data for the UserVO and manally created a movie review object to test the frontend. My requests weren't being authorized before I added cors authentication to handle requests from localhost:3000 in reviews settings.py. 

# Minor Problems: 
    I want to find a way to display the date and username for each review. I also keep getting: 'each prop must have a unique key value' even though the id for each review is unique in the map function. 

# Resolved: 
    Fixed bug in movie view function where reviews api returned a dictionary with a list of reviews from the database named “reviews:” with an extra semicolon instead of just "reviews". This caused an error when I tried to access the "review" list from the dictionary being passed. 
    Type error: can’t create list with map function → usually means that data is not a list. 

### 8/27/2022
    How do I filter movies by the imdb_id instead of the movie_id in the views function? Resolved: When no id is passed into the URL for the get reviews function, then api_list_reviews_by_imdb_id will handle the request instead, get the movie by imdb_id, then find all the reviews associated with said id in the database. I also tested tested the list reviews page with Myo's movie detail page on react. One feature that I decided to include on the UI is the scroll bar function for the list of reviews instead of scrolling with the entire page because a user would ideally want to see the movie they're looking at the reviews for. 

### Fixed bugs 
    - Got the scroll to function. Had difficulty getting the actual bar to appear on screen. I ended up setting top and bottom margins which gave the container a fixed size and got the scroll bar to appear. Setting overflow to 'hidden' disabled the scroll bar and cut out the rest of the reviews. 
    - Deleted user property in the Review model, migrated, then created it again as a foreign key to the user model because there were already rows in the table. (Deleting then creating new table is easier than modifying pre-existing rows). 
    - Added user property to the review decoder and an UserVO encoder to views.py. 
    - I also couldn't fetch the imdbId from the movie detail component. The solution was to call the review list component from the movie detail page in the return statement and passing in data as a prop to the review list component. 
    - Kept getting different numbers of stars because data wasn’t being passed correctly. (imdb_id was actually being passed as a dictionary) and not a string. 
    - Tried to get reviews through a GET request to the api_list_movie_by_id method and passing a JSON body with the correct imdb_id. But in practice we don’t pass anything useful in the get request body because it messes up the database. We don’t want multiple duplicates in the database every time the get request is called, aka, ‘page is refreshed’. 

### 08/29/2022
    Added date property to the ReviewEncoder. Also added a date decoder to the built-in json encoder in json.py. I also added some font features for displaying reviews and dates in the frontend. 
    Questions: how do I check if reviews exist for this one movie and only render/send get request to review api if it exists?


### 08/30/2022
    Bug: InconsistentMigrationHistory: Migration admin.0001_initial is applied before its dependency account_rest.0001_initial on database 'default'.
    Solution: Delete all migrations and pycache folder. Comment out 'django.contrib.admin' in the installed_apps variable and url route for django admin in urls.py account_project folder. After rebuilding and running, make migrations in the accounts terminal. 

### 8/31/2022
    Setup UserVO poller in reviews microservice to pull data from accounts microservice. I added the reviews-poller as a service to the docker-compose file and configured the URL to:
    "http://account-api:8000/api/accounts/" because that's the service we want to poll data using an external port which means we are probably not on the same docker network. 


# Bugs:
    The first problem I ran into was with the poller. After getting the connection working, the response object returned a 400 bad request response instead of the expected data. I tried adding the reviews-API microservice, ‘localhost’, and ‘account-api’ to the allowed_hosts in accounts microservice, but kept getting the same error when printing the request in my poller.py file. 

# Solution: 
	There were two allowed_hosts variables declared in the settings.py file of the account microservice. Deleting one of them fixed the issue and returned the expected data (usernames and user ids). This is what the actual variable was supposed to look like → ALLOWED_HOSTS = ["localhost", "127.0.0.1", "account-api", "reviews-api"]
    I learned that 127.0 0.1 is considered synonymous with “localhost” (so taking out one or the other might not change anything) and host by default is an empty string. When using postgres, we should set HOST to ‘localhost’ or “127.0.0.1” 

# Bug 2. 
    The second problem was realizing that in all of our settings.py files, our default databases were set to SQLite and not PostgreSQL. The solution was to change the database variable settings.py to: 
    DATABASES = {}
    DATABASES["default"] = dj_database_url.config()
    Now it will look at the Postgres database we set up in the docker-compose file under the evnrionments section. Declaring each service in the POSTGRES_MULTIPLE_DATABASES variable only creates databases if there isn’t one declared already in settings.py. Ours by default was set to SQLite. I also had to reconfigure the url_path under each microservice to match the postgres database for each specific microservice so that docker knows where they are. Finally, I rebuilt containers, volumes, and images with the mounted volume using: 
    -docker run -it -v $(pwd)/reviews/api:/app <image-name> bash


## 8/31/2022
    Fixed poller issue from the previous day. 
    Pulled down Myo and Matthew’s branches to merge. 
    Resolved conflicts in docker-compose file, app.js, NavDropDown.js, and MovieDetail.js. Mostly accepted changes except in docker-compose file and settings.py. Made solving conflicts easier by going to settings, typing merge, and enabling automatic merge requests. Poller works after taking out extra allowed_host in accounts settings and is able to successfully poll data from account microservice to use in reviews. There was an issue with page rendering for MovieListView on my laptop only. Each column is squished together even though it works on everyone else’s branch. The signup.js page is working, but the form is squished on one half of the screen. Again, only on my computer. Committed and pushed to test branch and kellys-branch

Tomorrow:
    Test creating a review for the movie with the user from the front end. 

## 9/1/2022
    Added check if movie exists in the database, else create one when request is called. 
    Issues: The prop/data variable was undefined even though the console logs showed that they weren’t.
    Page not rendering in the correct order. 
    Since I need the movie id to check that the movie in the getmovie state exists first in order to get the reviews, reviews is an always undefined value. 
    Wrote the check movie logic. But the movie view function was returning a list of movies rather than just one movie. And it was ultimately undefined because we weren’t waiting for the movie detail page to fetch the movie before assigning it to the review prop. 
    Ran into a Skip key error: Query set is not JSON serializable. 
	Solved by setting safe to false to pass nondictionary objects. 
    

## 9/2/2022
    Question: why isn’t prop filtered properly/passed more than once? Page breaks if it’s not rendered at the same time (maybe)
    Back end isn’t working again 
    Had to change the post-movie view function to 
1.  Check if the movie exists in the database first with a try   
    catch statement.
2.  If not, then create one. 
3.  Return the movie at the specific id.

    Ran into a problem with the front end when trying to handle the movie that does not exist in database condition. Even though my prop that I passed from the movie detail page had data, the prop that was getting passed doesn’t have data every time. So we shouldn’t be able to return the review page without waiting on the movie detail page to finish rendering first, and specifically, the movie variable. 
# Solution:
	Adding a conditional to the movie detail page where the review list page is invoked. → only trigger the listReview component, if and only if, movie[a random property] is true. Otherwise, null/do nothing. 

    After this was resolved, I could finally work on the reviewsList component. However, my fetch request continuously returned a 500 Response error because the movie did not exist in the database. So I altered my movie post function to handle both instances, and either return the movie if it exists, or create one in the database and then return it. 
    Altered my fetch getReviews() function to fetch the data only after the movie has finished fetching its data because I don’t want to list reviews/a message if the movie doesn’t exist in the database yet. 
# Solution: 
	Declaring a useEffect hook after both functions have been created
    because we want the page to re render only if a change has been made to the list of reviews or the movie object. Another error I ran into was that when there were no reviews, nothing gets rendered. So the page works fine, but the ‘No reviews yet’ message wasn’t showing even though the function that handles it was being called and it was successfully getting rendered for the review page. 

# Solution: 
    Instead of trying reviews == [ ], I did reviews.length == 0
## 
    Ran into another bug after resolving merge conflicts. Kept getting a 405 method not allowed response when trying to create a movie in the backend. This stumped me the entire night and couldn’t resolve it before going to bed. 

## 9/3/2022 
    The solution to 405 response: 
    The merge ended up duplicating the list_movies view at the bottom of the file because it wasn’t in conflict with anything, so I missed it.  And since it has a required decorator for getting requests, none of my POST requests were working because my list_movies function was being overridden. Deleting the extra function got rid of the issue. 
# Other changes:
    We decided to switch the layout of our template to a black background instead of white. This change was implemented in the movie detail page so the text for the review box wasn’t showing up since inside the div container was set to ‘white’. 
	Solution: 
    Quick solution was just to wrap a div tag around the text in my component and set classname to white. 
    I also ran into the ‘useradmin’ already exists bug after merging. Comment out the default Django user before migrating my own models with their own admins. 


# 9/06/2022 
    Converted URL into environment variables for review frontend and the reviews poller for frontend. We also worked on CI/CD in GitLab and Heroku. Some problems included bypassing the paywall on GitLab for the pipeline and getting our tests to pass. I started working on tests for the list reviews microservice. 

## 9/07/2022 
    When running the linter for React, we had many unused variables to resolve. Instead of storing the post request for the list reviews react component, we tried just sending a fetch request to the URL, which got rid of the 500 response error because we don’t need a response object. So now every time a post request is sent to the create movie backend, we don’t get an error. Fixed create a review button Got imdbID from the movie detail component as a prop. Fetched the current user logged into session from account view API 

# Other Issues:
    Needed a way to fetch the username associated with the review object so I added ‘username’ to one of the properties for the review encoder. Also need to find the username of the current logged-in user from the token when creating a review. Because reviews are associated with the user that creates them. 
	Solution: Fetch the request to the Accounts microservice and retrieve the username and id of the current logged-in user and use that information when creating the review. Created a useEffect to a token from the backend using the URL. Once the token is not null (meaning the first request has gone through), then send a request to the backend for user authentication. I.e. verify that they’re logged in and if the account exists in the backend, etc. 


## 9/9/2022
    Tried to help with creating a Review form. The main problem was figuring out how to close the pop up form once the ‘submit’ button is clicked and the request is successfully sent to the back end. I figured out how to get rid of the pop up, but not the background of the popup so the page wasn’t accessisable. We tried brainstorming maybe different solutions, one of them being rerendering the movie detail page completely after submitting, or just rerendering the list review page. I tried to create a conditional in the render that hid the form if submit == true, but it didn’t actually get rid of the form completely because the background was still opaque and we were still stuck with the opaque form background. Ended up scrapping that solution and opening a help ticket. 

## 9/12/2022 
    Changed the format of the review list page so that the stars are colored, the text is bigger, and added a scroll bar. Also figured out why the css hasn’t been working after merging. The import got lost so after redeclaring, the formatting was finally resolved. Was originally doing one box with each review separated by a line, but decided to add a white container around each review and have a black container with the scroll bar at the back.

## 9/13 2022 
    Struggling to figure out how to format the page so that every review is in its own container instead of being displayed in one box with a dark background. Made changes to the div inside the map function of reviews and changed className to'bg-white mb-4 rounded-3 border border-dark text’ to have a review inside each box. We also decided to hide the scroll bar for the reviews so we used a WebKit scrollbar in our css and called it where we add ‘scroll’ to our className. 

## 9/14/2022
    Realised that the webkit hides the scroll bar for the entire website, which we don’t want to happen because of functionality. The solution was to declare the webkit as an id with ‘#’ instead of the root selector, which is used to declare global variables, and is why it was overriding all our other default scroll bar functionalities. And the # id selector just applies properties to elements with the specific id. Added cors inside every fetch request to the back end because we wouldn’t create any reviews on the deployed site even though it was working on our development server. The Dockerdev.poller file wasn’t supposed to be in the reviews folder. I think when we were setting up for deployment, the reasoning was that it had to be in a file with a manage.py folder, but it wasn’t the case. 

https://developer.mozilla.org/en-US/docs/Web/CSS/:root

## 9/15/2022
    We think that the issue has to do with how our poller is set up in Django and on the deployment end. Tried a couple of solutions, but none of them worked. To save time, we decided to try and use crontab instead to create the functionality of the poller since it’s worked for most groups and we’re a day away from the project due date. Daniel stayed late yesterday to help us figure the issue out and walk us through the debugging. How we found out the userVO was the problem is by going into the Heroku admin page for reviews microservice and checking if it was pulling data from existing users. It wasn’t. After meeting with Daniel, we decided that the best solution was just to test the deployment for the review service manually by creating UserVO objects in the admin. This allowed all our other processes to work except the poller. We ended up altering the poller.py file and added the os.environ variable before the setdefault call on line 9. Because we think that the setDefault declaration could change the service that the os.environ is calling. I.e, it's no longer calling the accounts-api microservice because it's now in the developement server. The new change allowed us to bash into the poller container on heroku. 