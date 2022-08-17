<!-- documentation for the APIs that you think you'll need to make the project work  -->
# APIs

## Get a list of movies
* **Method**: `GET`
* **Path**: /movies/

Input:

```json
{
  "movie_name": string,
}
```

Output:

```json
{
  "id": int,
  "movie_name": string,
}
```


## Get one specific movie - detail page
* **Method**: `GET`
* **Path**: /movies/<id>


## Get a list of movie reviews for a movie
* **Method**: `GET`
* **Path**: /movies/<id>/review


## Create a movie review
* **Method**: `POST`
* **Path**: /movies/<id>/review

## Update a movie review
* **Method**: `PUT`
* **Path**: /movies/review/<id>

## Delete a movie review
* **Method**: `DELETE`
* **Path**: /movies/review/<id>


## Get a list of users 
* **Method**: `GET`
* **Path**: /users/

## Create a new users 
* **Method**: `POST`
* **Path**: /users/