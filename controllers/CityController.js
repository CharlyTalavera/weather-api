const request = require('request-promise');

const result = {
    "html_attributions" : [],
    "results" : [
       {
          "formatted_address" : "Laguna Blanca, Formosa Province, Argentina",
          "geometry" : {
             "location" : {
                "lat" : -25.1266785,
                "lng" : -58.24466529999999
             },
             "viewport" : {
                "northeast" : {
                   "lat" : -25.1092161,
                   "lng" : -58.2280442
                },
                "southwest" : {
                   "lat" : -25.1485158,
                   "lng" : -58.2648992
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
          "id" : "dc8b0cf45c8c80e8f47a886c440a85be04083b5e",
          "name" : "Laguna Blanca",
          "photos" : [
             {
                "height" : 3264,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/110211993620696465513\"\u003egeorge axtz\u003c/a\u003e"
                ],
                "photo_reference" : "CmRaAAAA-4zl9K5aq22oXgUGnHezNrNnmaKcPgYlndu7ssj3gbnzSXCDvbJ552uX-wuUtZr1ppWzq76TxQnoF2z1U2rmiB5da-wJ9vrqDhhCCIzahFE98aLML8ZoOcKbTL2KNMm9EhCEJ3T20GbGfDbARZYEpI1UGhSqTaVTkwTm3t-0upPIZU8cx0o_Uw",
                "width" : 2448
             }
          ],
          "place_id" : "ChIJkzP94TdOXZQR4QTTTGyV6ig",
          "reference" : "ChIJkzP94TdOXZQR4QTTTGyV6ig",
          "types" : [ "locality", "political" ]
       },
       {
          "formatted_address" : "Laguna Blanca, Río Negro, Argentina",
          "geometry" : {
             "location" : {
                "lat" : -40.7225858,
                "lng" : -69.84241129999999
             },
             "viewport" : {
                "northeast" : {
                   "lat" : -40.7141289,
                   "lng" : -69.8264039
                },
                "southwest" : {
                   "lat" : -40.7310416,
                   "lng" : -69.8584187
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
          "id" : "ff07d23448d5bf35e68875e22153d12e0fd08eb2",
          "name" : "Laguna Blanca",
          "photos" : [
             {
                "height" : 1944,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/111482114867179132161\"\u003eNelson Pouso\u003c/a\u003e"
                ],
                "photo_reference" : "CmRaAAAAatXRhoEQNiJaxmbXOSCvOBRn6OD8I6MU9CceyVTdy0pK4VxCDgziSa6QiGOp6a-upDYv0JFklb8aH_1fZ8PoXhEm-WJm55Goafzzqt8ECTP36464_XsLr2G4EkVfarYuEhCWT5jL8g4_0rn8qgP9bgP0GhRmbojNixBxqnWVcSsZb4Vc3j89oA",
                "width" : 2592
             }
          ],
          "place_id" : "ChIJZ95lgMWHD5YRYy_jTkBf4BI",
          "reference" : "ChIJZ95lgMWHD5YRYy_jTkBf4BI",
          "types" : [ "locality", "political" ]
       },
       {
          "formatted_address" : "Laguna Blanca, Bolivia",
          "geometry" : {
             "location" : {
                "lat" : -22.8029236,
                "lng" : -67.79140409999999
             },
             "viewport" : {
                "northeast" : {
                   "lat" : -22.7815774,
                   "lng" : -67.7683227
                },
                "southwest" : {
                   "lat" : -22.8218788,
                   "lng" : -67.81760680000001
                }
             }
          },
          "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
          "id" : "1e7f12f7fa92c5d1fc7d100d0bed4d78f4280937",
          "name" : "Laguna Blanca",
          "photos" : [
             {
                "height" : 1152,
                "html_attributions" : [
                   "\u003ca href=\"https://maps.google.com/maps/contrib/105849825865985085531\"\u003eKoen Smits\u003c/a\u003e"
                ],
                "photo_reference" : "CmRaAAAA5FYy42ia19OGyaSBGLo4mm-_WBccU7A1dIo_7kxlkURRSnt5PiA31xRsONhcDDxApYgqPZyyiD3Mx7iw4nxWeaNNQMBtRQOp39MyEf6YT2yxvKObj1o9EpURaTgflJGXEhBcWSYVF3GMIWJCIzxlSzA2GhTDT3Qw2Fdln9RbMt0Sy1bnRZJY2A",
                "width" : 2048
             }
          ],
          "place_id" : "ChIJLzorwmOTqZYRtMM6IzaWgKU",
          "rating" : 4.7,
          "reference" : "ChIJLzorwmOTqZYRtMM6IzaWgKU",
          "types" : [ "natural_feature", "establishment" ],
          "user_ratings_total" : 31
       }
    ],
    "status" : "OK"
 }

module.exports = {

    'GET /city/search': async (req, res) => {
         const result = await request({
            method: 'get',
            uri: `${process.env.GOOGLE_API}?query=${req.query.q}&key=${process.env.GOOGLE_KEY}`,
            json: true
         });

         return res.status(200).json(result ? 
            result.results.map(result => { return {
               name: result.formatted_address.split(',').slice(-3).join(', '),
               lat: result.geometry.location.lat,
               lon: result.geometry.location.lng
            }}) : []);
    }
}