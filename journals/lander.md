## June 16, 2022

## August 22, 2022
Today my partner and I decided to work on the signup for the views.py. We reference the api_views for the conference go and I went on Bootstrap as well to find html for our react page. We got our containers to run and ran migrations for our models, and we finished it off by adding CORSHEADERS in our settings as well as adjusting the installed apps and the middleware.

## August 23, 2022
Today my partner and I continued to work on the signup page on the front end side. We managed to get format the Bootstrap html that we found for a signup correctly and we also configured it to be fully functional, as inputting the data when creating account we would see the console.log show up on the terminal. We then began focusing on converting the react page into smaller pieces potentially using react hooks.

## August 24, 2022
Today I continued work on the sign up page. We referenced the learn module when it came to authentication and were able to set up an authentication token users to be able to login and logout. However, we have reached a block where my partner and I are trying to figure out how to show whether the person is logged in or not, giving the user special privileges on being able to access certain tabs on the dropdown menu, for example, if the user is logged in, they would be able to sign out as well as have access to the create a review or my reviews, whereas a person that is not logged in wouldn't have access do it. I reckon going back into previous projects would give me insight into how to set that up.

## August 25, 2022
Today I continued working on the login page. I referenced from the learn module and used code from the Authentication which set up the login.js. I am still trying to go about how to link the login feature with the accounts as well. and I believe I need to at a function within our sign up feature and make some changes for our app.js

## August 29, 2022
Today my partner and I finally got the login and authentication to work with reference from the model. I then did a lot of bug fixing and made changes to my views.py and models.py in order to include particular fields like authentication and is staff as well as added the backend functions for the views.py. I implemented a user_visibility feature in the dropdown nav where if the user is logged in our logged out, only certain dropdowns options will be present for the user. I then proceeded to work on a user profile page for the user to be able to look at their information and reviews.

## August 30, 2022
I was dealing with debugging the whole day as I was trying to figure out why my logout feature wasn't working. I ended up debugging with Andrew and Daniel where I needed to delete my docker containers, images, and deleted all the db.sqlite3 on my code as well as changing our database. However, I was still unable to overcome this roadblock however, the login was no longer an error

## August 31, 2022
Today I finally got the roadblock fixed, I changed the docker.yaml from ghi to react within the volumes as well as did a makemigrations for my account container. Apparantly I was missing a migration from djwto with some file called jetblack. I felt so much better now that the logout feature was now working and now I will be working on the view user profile feature. For some reason we cannot use my-profile as a href for the dropdown nav as it would somehow try to link to the api. Ask myo about this later..

## September 1, 2022
Today I worked on adding bug fixes to the sign up feature, such as creating a few if blocks in order to make sure that the password the user makes is 8 characters long and is unique. On top of that I added some features to the front end part of the pages adding placeholders design changes like color, as well as created a terms of service page to reflect the usage of our website. I will look into adding a footer later on.

## September 2, 2022
Today I worked on fully merging with our group. We had this issue where our login.js was conflicting with our files on gitlab stating it was Login.js, but for some reason we would not use git add . and the terminal would not recognize the change between the capitalization. We were forced to use git push --force and that seemed to fix the problem. For the time being I got some work on a footer, but I plan on making it smaller and streamlined as well as adding some links for instagram,facebook,youtube, and linkedin.

## September 6, 2022
Today my team and I worked on fully merging with our group as well as continuing further implementation of heroku and getting all of the urls down correctly.

## September 7, 2022

## September 8, 2022
I added some more features to the footers