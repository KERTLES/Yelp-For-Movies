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

Input:

```json
{
 "id":int
}
```

Output:

```json
{
  "id": int,
  "movie_name": string,
  "synopsis": string,
  "release_date": date,
  "director": string,
  "actors": sting,
  "picture_url": string
}
```


## Get a list of movie reviews for a movie
* **Method**: `GET`
* **Path**: /movies/<id>/review


Input:

```json
{
 "id":int
}
```

Output:

```json
{
  "rating": int,
  "description": string
}
```



## Create a movie review
* **Method**: `POST`
* **Path**: /movies/<id>/review


Input:

```json
{
 "id":int,
 "rating": int,
 "description": string,
 "movie": int,
 "user": int
}
```

Output:

```json
{
  "rating": int,
  "description": string,
  "movie": int,
  "user": int
}
```


## Update a movie review
* **Method**: `PUT`
* **Path**: /movies/review/<id>


Input:

```json
{
 "id":int,
 "rating": int,
 "description": string
}
```

Output:

```json
{
"rating": int,
"description": string
}
```


## Delete a movie review
* **Method**: `DELETE`
* **Path**: /movies/review/<id>


Input:

```json
{
 "id":int
}
```

Output:

```json
{
  "rating": int,
  "description": string
}
```



## Get a list of users 
* **Method**: `GET`
* **Path**: /users/


Input:

```json
{
 "id":int,
 "username": string,
 "password": string,
}
```

Output:

```json
{
  "id": int
}
```


## Create a new users 
* **Method**: `POST`
* **Path**: /users/


Input:

```json
{
 "id":int,
 "username": string,
 "password": string,
}
```

Output:

```json
{
  "id": int
}
```

