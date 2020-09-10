var keys = require("../keys.js"); 

var axios = require("axios");

/* This is the weather api. It provides the daily weather based on the zip code which will need
to be taken in as a URL param.
 */

module.exports = function (app) {
    
    app.get("/weather", (req, res) => {

        var zipCode = req.query.zipCode;
        axios.get("https://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + "&exclude=hourly,current,minutely&appid=" + keys.openweather.id)
            .then(function (response) {
                res.json(response.data);

            })
    });
Adowell25
};



    /* This is the events api. Grabs the event ids that you are registered for */

    app.get("/events", (req, res) => {

        var apikey = keys.eventbrite.key;
        axios.get("https://www.eventbriteapi.com/v3/users/me/orders",{
            headers:{
                "authorization": "Bearer "+apikey
            }
        })
            .then(function (response) {
                var events = {"events":[]};
                var orders=response.data.orders;
                for(var i=0;i<orders.length;i++)
                {
                   events['events'].push(orders[i].event_id);
                  
                }
        
                res.json(events);

            })
    });

    /* This is the event api that grabs the individual information on the events based on the id */

    app.get("/events/:id", (req, res) => {

        var apikey = keys.eventbrite.key;
        var event_id=req.params.id;
        axios.get("https://www.eventbriteapi.com/v3/events/"+event_id,{
            headers:{
                "authorization": "Bearer "+apikey
            }
        })
            .then(function (response) {
                event={
                  "name": response.data.name.text,
                  "description": response.data.description.text,
                  "start": response.data.start,
                  "end": response.data.end
                };
                
               res.json(event)

            })
    });



};
 master
