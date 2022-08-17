# Data models

## Movie
| Name | Type | Unique | Optional |
|-|-|-|-|
| movie_name | string | no | no |
| release_date | date | no | no |
| runtime | int | no | no |
| synopsis | text | no | no |
| actors | text | no | no |
| directors | text | no | no |
| picture_url | string | no | no |


## Review
| Name | Type | Unique | Optional |
|-|-|-|-|
| user | reference to User entity | no | no |
| review_context | text | no | no |
| created_date | datetime | no | no |
| movie | reference to Movie entity | no | no |
| rating | int | no | no |



## User
| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| email | string | yes | no |
| password | string | no | no |
| first_name | string | no | no |
| last_name | string | no | no |
