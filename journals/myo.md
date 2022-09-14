## September 8, 2022
Today we worked:
- Figuring out our blocker from yesteday during deployment and continuing with the deployment process

We submitted a help desk ticket today in regards to the blocker we had yesterday. Andrew was able to come and assist us with our problem. It took a while to pinpoint the exact issue, but we learned that the cause of the problem might have been because Matthew had removed gunicorn in the requirements.txt file and replaced that with uvicorn instead. He had originally thought that we were supposed to use uvicorn for our deployment process. And since our Dockerfile for deployment was set up (by Learn's instruction) to use gunicorn instead, that had caused us to keep getting a cors error, even though it was actually not really a cors related issue. A few things I had learned during our debugging process was that Heroku automatically created an environment variable called $PORT in its system that can automatically map it to whatever port it is we needed our application to listen on in the Dockerfile. Another thing that I had learned was that a safe approach was to add a "mode" attribute that had a value as "cors" in our fetch config for our fetch requests in order to prevent any cors related issue to come up. I also learned that we should assigned DEBUG in our settings.py file to be True for now even though we were in deployment. But because we were trying to pinpoint the correct error message,it was essential to set DEBUG to True so that we could view the logs in our deployment container on Heroku. And when we are finally ready to deploy, with all the functionalities working properly, we can then change DEBUG back to False. There was some other small bugs that we had encountered after that, which we hadn't been able to figure out yet. Matthew was going to continue working on it more later today to try and figure out a fix for it.


## September 7, 2022
Today we worked on:
- Continuing our deployment process and getting started with running the pipelines on gitlab

I added a feature so that our logo can redirect back to Home Page when clicked on. One issue we encountered while running the pipeline was that there were a lot of unused variables throughout our application. And that was also one of the reasons why our react image was not getting built properly, causing the pipeline to keep crashing and failing. So we spent a lot of our time going through the files that did not pass the linter and made adjustments to those. Although because there were a lot of unsed variables that we actually needed to be placed in some of our files, we had to find a way for that to be possible without the linters interupting our build process. Through some research, we learned that adding "// eslint-disable-next-line" above a specific line of code would allow the linter to skip linting that line of code and not cause an error for deployment. Another issue we had ran into was that the url was not getting populated correctly on certain pages while testing out on our deployed web page. But we learned that by modifying our urls in out front-end files so that it uses the "PUBLIC_URL" environment varible set up in the .gitlab-ci.yml fixed that issue. Towards the end of the day, we ran into another bug that appeared to be a cors header issue that we were not able to figure out a solution for; even though everything had been working fine in development. And because of that, we could not really pinpoint where the issue was coming from in deployment. That was also our biggest blocker at the moment, we were planning on submitting a help desk ticket tomorrow and hope to get it resolved.


## September 6, 2022
Today we worked on:
- Continuing our merging process (as a group) and setting up our CI/CD for deployment

We began our group working with everyone pulling down the final merge to main that Kelly did on Friday of last week; as well as updated our additional progress to main. Matthew and I ran into a few issues while merging due to our login.js file was renamed before, causing git to no be able to commit and push no matter how many times we tried to commit it. I later found out through some research that I could use git restore to discard any uncommit changes, and that was able to get rid of the issue. 

In regards to our initial set up for deployment, we pretty much just following the instruction on Learn to set up our .gitlab-ci.yml file and the Dockerfile for deployment for each microservice. There was not that many issues that we had besides just figuring out the correct places to put what and name what. Kelly had to fix up some of the urls where she had harded coded them originally, and changing it so that the domain got stored in an environment variable in the docker-compose file.


## September 2, 2022
Today we worked on:
- Merging our progress up to now together again (as a group)

It was quite a short day today so we mainly focused on merging what we'd had so far together as a group to the main branch so that we could start on deployment next week. We did this process pretty slowly and taking turns pushing our progress to main and pulling as we went, hoping not to run into too many issues. Everything was going pretty smoothly besides some merge conflicts here and there. Kelly ran into some quite a lot of merge conflicts during our merging process; although that was not a big issue and we were able to complete our merges at the end of the day with everything working the way it was supposed to. We were planning on continuing our merging process on Tuesday before starting our deployment process.


## September 1, 2022
Today I worked on:
-  Making some small other adjustments to the design of our application

I added the logo to our Nav Bar and got rid of manual name that we originally had. As I was helping Nikansha with merging our branches together and correcting the same bug that I had had yesterday, we realized there was a slight bug on the Sign Up page that cause the user not being automatically logged in after signing up. Hence, Matthew was going to work on that some more to try and figure out the solution for it. I also helped Lander with a bug he had when trying to get the footer to load on react. The reason for the bug was because react uses a different format when implementing css style attribute directly onto the JSX; so instead of the regular format which is "style="'somestyle: value' ", it had to be in the react format which is "style={{somestyle: 'value'}} in order for the style to be applied properly.


## August 31, 2022
Today we worked on:
- Merging out progress up to now together (with Matthew and Lander)

I started merging what I had been working on with Matthew and Lander's progress at the beginning, but ran into an inconsistent migration issue caused by the use of our custom User model rather than Django model. I had tried testing out different solutions such as deleting my migrations, containers, images, and volume and building everything back from scratch; and even tried running the container separately in the hope that the migrations would be made and applied properly; but nothing was really working. I had also tried researching which I found a solution on stack overflow. Unfortunately, I wasn't awared that there was one step that I missed which caused the solution I found to not be working. However, I was able to get help from Phil (our seir) to fix the problem. And that was when I realized that I was missing a final step. 

Later in the day, I helped Kelly with a poller bug that she was having. She kept getting a 400 Response error while trying to make an API call from her reviews microservice to the accounts microservice. It turned out the bug had been because the Allow Host variable wasn't set up properly in the accounts' setting.py file. For some reason there was 2 Allow Host variables in the file. THe bug was fixed once we removed one of the two variables and set up to allow the host from the reviews microservice to access the accounts microservice.

One other thing I was able to get done on my part was adding the logo to our application. I learned that if I placed the image inside the public directory, I only needed to write "/some-image" and react would automatically know to look into the public directory to locate the image. I had originally tried a variety of ways (ie. "../public/some-image", "./public/some-image, etc.) and nothing was working out; until I learned that that was just how react works.


## August 30, 2022
Today I worked on:
- Refining the application by adjusting some css styling

For the most part, I was just fixing up some styling issues that I had at the beginning but didn't have time to adjust because I wanted to focus more on the functionality of the application. However, today, I was able to make those adjustments. For example, I added some a magnifying logo to the left of the search bar as well as modifying the submit button so that it showed an arrow rather than just the word "Search". I was also able to align the cards for the list of movies so that they are evenly aligned on each role rather than filling in on empty spots. I was also able to create a placeholder for movies that didn't have a poster included in the JSON response; as well as showing the released year as "Unknown" when the information is unavailable. For the Movie Detail Page, I adjust the ratings style so that they aligned horizontally below the movie information table. I also tried to add in our logo to the main page and the genre list page but that was not working out for some reason. I was planning to do some more research on it tomorrow to get it to work.


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