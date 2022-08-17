# Data models

## Movie
| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| release_date | string | no | no |
| synopsis | text | no | no |
| director(s) | text | no | no |
| actor(s) | text| no | no |
| picture_url | string | no | yes |


## Users
| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| user_name | string | yes | no |


## Reviews
| Name | Type | Unique | Optional |
|-|-|-|-|
| title | string | no | no |
| star_rating | number | no | no |
