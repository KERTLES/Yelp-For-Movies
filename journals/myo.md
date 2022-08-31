## August 29, 2022
Today I worked on:
- Implementing the search feature and the filter by a genre feature

It was actually really great progress impletementing these 2 features. I had a little of struggle while working on the search function to look up a list of matching results when a user types in the movie they want to look for. I was trying to make it so that when someone clicks the submit button on the search bar, the page would re-render and load a list of matching results, rather than taking them to another page with a different url for that results list. I couldn't get it to work at first because even though I was able to pass the search name as a prop to the MoviesList component, I didn't know how to apply it inside the MovieList component so that the page would load up correctly. I eventually got it working by taking the result to a different page, and then refactored the MovieList component so that it does what I originally wanted it to and also by placing props inside the dependency array of the useEffect to get a list of movie, so that the page re-rendered everytime props changes.

For the filter by a genre feature, it turned out to be a lot easier to impletement than I had thought. I was able to get a list of the genres from the TMDB page to use in the nav bar so that whicheve the genre a user select, it would take them to result by genre page with the url also dynamically refectly the corresponding genre.

## August 24, 2022
Today I worked on:
- Completing the creation of the Movie Detail Page

I started off with just creating a static detail page for a specific movie, with all the information I got from the day before. It was kind of hard trying to style some stuffs but overall everything went well. The only trouble I ran into that took a while to figure out was to make the page dynamic, meaning the detail page load the details of the whichever movie I clicked on from the Main Page rather than just the just the same movie.

The two things I learned during the process was the use of useParam and useRef. I was able to get the url link and the detail page to change dynamically using the useParam. But for some reason, the page would load for a second and disappear. I was able to fix that bug when I learned of useRef, which is to just save a reference point for a value so that I can reuse it somewhere else in the code rather than using useState to save that value (which is also the cause of the bug).


## August 23, 2022
Today I worked on:
- Refactoring the API Key and the public URL and getting the initial set up for the Movie Detail Page

Originally, I had hard coded the API key and the public domain for the TMDB page into the fetch function when making the API call. Therefore, I refactored the API key by storing that value into a variable called apiKey, which was retrived using process.env.REACT_APP_TMDB_API_KEY. Same with the domain, which was stored in tmdbUrl variable and retrived using process.env.REACT_APP_TMDB_URL. 

REACT_APP_TMDB_API_KEY and REACT_APP_TMDB_URL were initiated in the docker-compose file. I had, at first, named REACT_APP_TMDB_API_KEY as TMDB_API_KEY only and that was causing a bug for awhile until i realized that I needed to add the REACT_APP_ portion in front of it.

I set up the movie details in a table format just to see if I was able to get back the information that I wanted. I also decided on using the OMDB page for this feature as the JSON response data for this page gave me more information that I wanted. However, I only hard coded the URL to get back only one specific movie and not any movies. I'm planning on working on the design for the detail tomorrow before going back and refactor the code so that it can return the information for any movie selected.


## August 22, 2022
Today I worked on:
- Creating the Home Page and Movie API intergration

I realized there was a slight bug in our docker-compose file while trying to bring up the containers and notified the group of the bug. On Friday, we decided on changing our database service name from "postgres" to "database" but forgot to correct the host name for the WAIT_HOSTS key to the correspoding database name; and that was the cause for our bug.

Initially, I wanted to make an API call to the OMDB API page to get a list of movies. However, after realizing that this specific page is better suited for getting the details of a specific movie, I decided on using the TMDB API page instead. I had quite a struggle trying to understand and figure out the JSON response structure and API urls on TMDB API. I decided to go with a list of trending movies for our Home Page instead of my orignal decision, which was just a list of all available movies. 

I was able to eventually get a list of trending movies to display on the Home Page.

I also created a Nav Bar that includes (none of which are functioning yet):
- a dropdown Genre menu, with a sample list of three genres, that a user can click on to get a filtered list of movies by the specific genre, and
- a search bar that users can use to look up a specific movie(s)


## August 19, 2022
Today we worked on:
- Compiling the docker-compose.yml file and initializing each microservice (project and app)

We had trouble setting up the docker-compose file at first sicne we didn't exactly know where to start. But we eventually got everything figure out using the provided reference on Learn. We also ran into a bug while trying to bring up the docker container because it couldn't locate our requirements.txt file. However, we got the bug resolved once I realized that the context path that we input was incorrect. We decided on using postgres for our database and Django for our back-end.

Daniel came to our team to provide some feedbacks on our initial design and help with clarifying a question I had for making calls to the external API for our movies information.

We decided on making the external API call directly from the front-end to display the list of movies instead of trying to save all the movies data into our database; and only save the movie to the database when a user wants to create a review for a movie that doesn't already exist in our database.


## August 18, 2022
Today we had a brief meeting to decide who is responsible for which microservice:
- accounts - Matthew & Lander
- reviews - Kelly & Nikansha
- movies - Myo

We created an initial directory for each of our microservice.


## August 17, 2022
Today, we worked on:
- Going over the details of each file for our initial design in the docs directory

Matthew and I worked on our own ideas of how the apis endpoints are going to look like as well as the struture for the data model. We presented to the group each of our own version and decided on a common version to use. Nikansha worked on the initial screen designs for our application.


## August 16, 2022

Today, we worked on:
- Creating the README.md file which includes:
    - a summary to our website, 
    - defining the target audience, 
    - setting up our initial design, located in:
        * [API design](docs/apis.md)
        * [Data model](docs/data-model.md)
        * [GHI](docs/ghi.md)
        * [Integrations](docs/integrations.md)
    - defining our mvp functionality

We decided the initial microservices for our project are movies, reviews, and accounts.

Kelly created the API key for the TMDB API page that we were going to use for our application.

Lander was going to work on designing a logo for our application.