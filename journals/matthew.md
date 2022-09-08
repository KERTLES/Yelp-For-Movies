## June 16, 2022

## August 19, 2022
    Today we set up our Django, docker environment and react for the project so that we are ready to start coding. 
    We also did a little bit of break down of what suggestions we were given about how we should implement our code.
## August 22, 2022
    Today we made our first models and views in the accounts microservice.
    Made it so that it also creates new users within the Django authorization system.
    Tested it with Insomnia to be sure that the back-end works.
    Fixed some issues with docker not loading certain containers.

## August 23, 2022
    Today, we worked on the getting the sign up react page functional.
    We made sure that submitting a form resulted in the proper creation of an account and User.
    We also made it so that it tells a user that a password, email, or username has already been used and that they need to input new ones.
    Also, we implemented a rudimentary double password authentication system that only shows the register button if the same password has been input twice.

## August 24, 2022
    Today, we fixed up the sign up page and made adjustments to make it work better.
    We also began work on the Login page did extensive research trying to figure out Tokens.
    We also discussed more plans for the projects over the next few weeks.

## August 25, 2022
    Today, we spent more time trying to implement a login page and figuring out tokens. We ultimately got it to work where a user would successfully be logged in on the Django end. Ultimately figured out that the issue was something going on with JWT access token not being generated.

## August 26, 2022
    Quickly made a logout button to test out logout functionality on the backend side. Figured out how to make logout work.

## August 27, 2022
    Figured out what was wrong and managed to get a JWT access token generated. I also converted both the sign up JavaScript and the Login JavaScript into React Hook format. Also figured out how to get the pages to navigate to the main page once a user logged in.

## August 29, 2022
    Today, I helped out Lander with getting login code on his side to work properly.
    We also began work on adding the functionality where certain pages would be only visible to logged in users. So far, it only checks whether the user has a token or not, which we will have to adjust later to actually check credentials. We also moved the sign up page to a button on the navbar that disappears if the user isn't logged in.

## August 30, 2022
    Today, we began work on creating a user profile page where a user can update their information. Also fully implemented a logout button in a way that's fully functional.

## August 31, 2022
    Today, we adjusted the token verification system so that it actually checks if the user is authorized rather than just checking if a token is available or not. Also fixed some errors where the user profile updating would update the password in a way that wouldn't input it in the proper format. I also began work figuring out how to implement  React side tests. Finally, we managed to merge my branch into the main branch.

## September 01, 2022
    Today, I fixed some more errors with the log in system that the rest of my team noticed now that it has been pushed to the main branch. I also began further experimentations with react testing and managed to get two pyTests working on the Django side. Those two tests see if a list of accounts can be retrieved and if a new account can be created. It took a bit to figure out the formatting of the pytests, but I should now be able to create more relatively quickly.

## September 06, 2022 
    Today, we started deployment, but came across a situation where we can't continue with Gitlab until we give credit card credentials. I started working on a rudimentary poller, but I may not use it. I also fixed some formatting issues going on with the frontend.

## September 07, 2022
    Today, we continued to try to get our site deployed. So far, we managed to get the homepage and some of the login pages to show up on gitlab, though we are getting CORS Header errors. I also added the ability for a user to view their reviews by going to the profile page. I will need to work on formatting it to look better. I also helped a little with getting the review creation functionality to work.