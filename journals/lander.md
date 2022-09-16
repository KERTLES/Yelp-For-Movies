## August 16, 2022
Today we worked on:
- Working on the README.me file which would explain what our website does and what kind of audience we will be targeting.


So far, we went about the learn module in order to figure out how to set up our code with the GHI, API, and integrations. We will be using 3 micro-services for our movies project which will be movies, reviews, and accounts. Our team found a free API for movies using the movie database (TMBD) and for the time being, I will be working on a design logo for our application.

## August 17, 2022
Today we worked on:
- Going through the learn in order to create the file directories for our first design.

For the time being, my team was brainstorming how we would want the website to look and what kind of features we would want. We can to the consensus of developing an application for a movie reviews application as well as how we will structure the application. We ended up decided that a format that we all agreed on.

## August 18, 2022
Today we worked on:
- Determining who will be working on each microservice:
  
Accounts - Matthew & Lander
Reviews - Kelly & Nikansha
Movies - Myo

We then made a simple initial directory for each of our micro-services.

## August 19, 2022
Today we worked on:
- Getting the micro-services initialized with the proper files and composing the docker-compose.yaml

We had no way of going about how to start this, but then the learn module was released and we were able to follow the commands in order to initialize the files for the micro-services. For our database, we will be using postgres and Django for our back-end (subject to change?). Fast-API we weren't too familiar with so Django was the best option.

## August 22, 2022
Today I worked on:
- Setting up our account micro-services backend on django.
  
Today my partner and I decided to work on the sign-up for the views.py. We reference the api_views for the conference go and I went on Bootstrap as well to find html for our react page. We got our containers to run and ran migrations for our models, and we finished it off by adding CORSHEADERS in our settings as well as adjusting the installed apps and the middleware.

## August 23, 2022
Today I worked on:
- Setting up the front-end react for our sign-up page using bootstrap.
  
Today my partner and I continued to work on the sign-up page on the front end side. We managed to get format the Bootstrap html that we found for a sign-up correctly and we also configured it to be fully functional, as inputting the data when creating account we would see the console.log show up on the terminal. We then began focusing on converting the react page into smaller pieces potentially using react hooks.

## August 24, 2022
Today I worked on:
-Using tokens for authentication for our sign-up page.

Today I continued work on the sign up page. We referenced the learn module when it came to authentication and were able to set up an authentication token users to be able to login and logout. However, we have reached a block where my partner and I are trying to figure out how to show whether the person is logged in or not, giving the user special privileges on being able to access certain tabs on the dropdown menu, for example, if the user is logged in, they would be able to sign out as well as have access to the create a review or my reviews, whereas a person that is not logged in wouldn't have access do it. I reckon going back into previous projects would give me insight into how to set that up.

## August 25, 2022
Today I worked on:
-worked on the login page and referenced authentication and tokens. It should be similar to the sign-up page.

Today I continued working on the login page. I referenced from the learn module and used code from the Authentication which set up the login.js. I am still trying to go about how to link the login feature with the accounts as well. and I believe I need to at a function within our sign up feature and make some changes for our app.js

## August 29, 2022
Today I worked on:
-bug fixes and cleanup of the login features and home page front-end stuff.

Today my partner and I finally got the login and authentication to work with reference from the model. I then did a lot of bug fixing and made changes to my views.py and models.py in order to include particular fields like authentication and is staff as well as added the backend functions for the views.py. I implemented a user_visibility feature in the dropdown nav where if the user is logged in our logged out, only certain dropdowns options will be present for the user. I then proceeded to work on a user profile page for the user to be able to look at their information and reviews.

## August 30, 2022
Today I worked on:
-Fixing bug that won't allow me to logout.

I was dealing with debugging the whole day as I was trying to figure out why my logout feature wasn't working. I ended up submitting a help ticket and debugging with Andrew and Daniel where I needed to delete my docker containers, images, and deleted all the db.sqlite3 on my code as well as changing our database. However, I was still unable to overcome this roadblock. On a side note the login was no longer an error, but the logout was still lingering.

## August 31, 2022
Today I worked on:
-Fixing the logout road block.

Today I finally got the roadblock fixed, I changed the docker.yaml from ghi to react within the volumes as well as did a make migrations for my account container. Apparently I was missing a migration from djwto with some file called jetblack. I felt so much better now that the logout feature was now working and now I will be working on the view user profile feature. For some reason we cannot use my-profile as a href for the dropdown nav as it would somehow try to link to the api. Ask myo about this later..

## September 1, 2022
Today I worked on:
-Implementing features on the front-end for the sign-up feature.

Today I worked on adding bug fixes to the sign-up feature, such as creating a few if blocks in order to make sure that the password the user makes is 8 characters long and is unique. Otherwise the option to make an account would not be possible. On top of that I added some features to the front end part of the pages adding placeholders design changes like color, as well as created a terms of service page to reflect the usage of our website. Finally, I started working on the framework for a footer later on.

## September 2, 2022
Today I worked on:
- Meeting with my group and fully merging so we are all on the same code.
- 
Today I worked on fully merging with our group. We had this issue where our login.js was conflicting with our files on gitlab stating it was Login.js, but for some reason we would not use git add . and the terminal would not recognize the change between the capitalization. We were forced to use git push --force and that seemed to fix the problem. I made small change to the terms of service feature where I added blank_ in order for the application to open a new tab of the terms of service, otherwise the user would lose all of their inputted data and leave the login or sign-up page. For the time being,  I also got some work on a footer, but I plan on making it smaller and streamlined as well as adding some links for instagram,facebook,youtube, and linkedin.

## September 6, 2022
Today I worked on:
- Working on the footer as well as working on the CI/CD implementation on Heroku.
  
Today my team and I worked on fully merging with our group as well as continuing further implementation of heroku and getting all of the urls down correctly. I was able to find a bootstrap model I liked for my footer and had used it converting it for JSX, however, it was unable to show up despite me having the data all in a Footer.js file as well as adding it to the App.js. I asked Myo for help and I needed to a style = {{ }}  for the div tags otherwise the footer would not be able to show.

## September 7, 2022
Today I worked on:
-Finishing up the footer

I was able to import react icons that would show an icon for Facebook, Instagram, Gitlab, and Linkedin. For the linkedin icon, I had made a dropdown nav-bar that would show each of our team member's names that when clicked would direct the user to a new tab of their linked in page. However, the dropdown nav-bart was unable to show up so I had asked my partner Matthew to help me. What ended up being the problem was that within the icon tag, he suggested I change the data-toggle="dropdown" to data-bs-toggle="dropdown" which essentially fixed the nav-bar having it show up. I believe data-toggle is an older version of html that is why it was not working. I pushed it to my branch and then to our main branch.
## September 8, 2022
Today I worked on:
-Adding more aesthetic features to the footer.
I added some more features to the footers like adding our custom icon underneath as well as changed the background color to black instead of white to match the home page.

## September 9, 2022
Today I worked on:
-Making adjustments to the page in order for testing to be easier.

Myo had asked me to removed the 8 password limit as we were still in testing phase since we wanted to see if the application worked on Heroku. I also removed the terms of service check button on the login page since it was irrelevant.

## September 12, 2022
Today I worked on:
-Working with my group in order to work on CI/CD pipeline up.

We initially had a problem with getting a heroku account up since we needed a credit card, however we ended up just biting the bullet since it was just used for confirmation. We went about going through the learn module in order to make a file in our VSCode as well as converting them onto heroku.

## September 13, 2022
Today we worked on:
- Working with my group on Heroku bug fixing.
  
There was a major blocker as the reviews team was unable to have their pollers show up on the heroku application even though it was being received that we needed to submit a help ticket for daniel and andrew to help us. So far, the application is working and this is our only bug.


## September 14, 2022
Today we worked on:
- Working with my group on our current roadblock.
  
We are still having a major blocker as the reviews team was unable to have their pollers show up. The good news is that they were able to finish particular features of their micro-services so they are basically done. The features was a 5 star rating as well as adding a format to the front-end when a user clicks on a movie, and now there is a pop-up option to rate the stars, a title of the review, and a paragraph.

## September 15, 2022
Today we worked on:
-Working with our group on the poller roadblock.

We had Daniel come in again in order to try and debug why the reviews poler was not showing up on Heroku and it continued on for the rest of the day, however Kelly was able to have a container show up on the Heroku end which was promising. I also worked on writing a unit test for our account model which would make sure that if an account username or email was not unique, the person would be unable to create an account.

## September 16, 2022
Today we worked on:
-Finishing touches for our group on the project.

Matthew was able to fix the poller problem as it was was a formatting issue where he needed to change the code from app to poller and now heroku recognizes it as a poller. For the time being we ran into a small bug where if a user tried to write a second review less than 20 seconds apart on the same movie, the user would be redirected to the login page. However, if the user waits at least a minute, they will be able to write the review. Everyone in our group tested it and we all got different time durations, Matthew was able to write a second review at 20 seconds, I was able to write one at 25 seconds, and some weren't able to write a second review until 1 minute in. For the time being, we will just be removing unnecessary code using flake8 and black.