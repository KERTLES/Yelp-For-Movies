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
