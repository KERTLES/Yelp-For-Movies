<!-- documentation for the APIs that you think you'll need to make the project work  -->
# APIs

## Get a list of movies
* **Method**: `GET`
* **Path**: api/movies/

Input:

N/A

Output:

```json
{ 
  "movies": [
    {
      "id": int,
      "movie_name": string,
      "release_date": int,
      "runtime": int,
      "synopsis": string,
      "actors": string,
      "directors": string,
      "picture_url": string
    }
  ]
}
```

## Get one specific movie - detail page
* **Method**: `GET`
* **Path**: api/movies/:id/

Input:

N/A

Output:

```json
{
  "id": int,
  "movie_name": string,
  "release_date": int,
  "runtime": int,
  "synopsis": string,
  "actors": string,
  "directors": string,
  "picture_url": string
}
```


## Get a list of reviews
* **Method**: `GET`
* **Path**: api/reviews/

Input:

N/A

Output:

```json
{ 
  "reviews": [
    {
      "user": {
        "id": int,
        "username": string,
        "first_name": string,
        "last_name": string,
      },
      "review_context": string,
      "created_date": int,
      "movie_id": {
        "id": int,
        "movie_name": string,
      },
      "rating": int
    }
  ]
}

```

## Create a movie review
* **Method**: `POST`
* **Path**: api/reviews/

Input:

```json
{
  "user_id": int,
  "review_context": string,
  "created_date": int,
  "movie_id": int,
  "rating": int
}
```

Output:

```json
{
  "user": {
    "id": int,
    "username": string,
    "first_name": string,
    "last_name": string,
  },
  "review_context": string,
  "created_date": int,
  "movie_id": {
    "id": int,
    "movie_name": string,
  },
  "rating": int
}
```

## Delete a movie review
* **Method**: `DELETE`
* **Path**: api/reviews/:id/

Input:

N/A

Output:

```json
{
  "message": string
}
```

## Get a list of users 
* **Method**: `GET`
* **Path**: api/users/

Input:

N/A

Output:

```json
{ 
  "users": [
    {
      "id": int,
      "username": string,
      "email": string,
      "password": string,
      "first_name": string,
      "last_name": string,
    }
  ]
}
```

## Create a new users 
* **Method**: `POST`
* **Path**: api/users/

Input:

```json
{
  "username": string,
  "email": string,
  "password": string,
  "first_name": string,
  "last_name": string,
}
```

Output:

```json
{
  "id": int,
  "username": string,
  "email": string,
  "password": string,
  "first_name": string,
  "last_name": string,
}