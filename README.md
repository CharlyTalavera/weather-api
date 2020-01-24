## Run

To start project, you must have installed docker and docker-compose. Then, run it with `docker-compose up`.


## Tests

To run tests, you must run `docker-compose -f docker-compose-tests.yml up`.

I have create some mockups services because it's not a good idea depend on third-parties api when we're making integrations tests.

## Endpoints

I have created some extra endpoints. For example, you can search a weather or forecast by coordinates (latitude and longitude).

There is a Google Api integration to search places names. This allow us to make searchs by city name and get a list of possible matchs.
This list contains each place with its coordinates, so we can get the weather and forecast by coordinates. 

I think that get a weather by coordinates is more accurate because open weather api search by name is not so powerful and it is limited. So we search places using google, and then search in open weather using the coordinates, that represents a unique identifier.

