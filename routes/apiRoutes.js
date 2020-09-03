var keys = require("../keys.js");

//You need to set the variables for lat and lon. Possibly by asking for a zip code? 

var axios = require("axios");
module.exports = function (app) {
    
    app.get("/weather", (req, res) => {

        var zipCode = req.query.zipCode;
        axios.get("https://api.openweathermap.org/data/2.5/onecall?zip=" + zipCode + "&exclude=hourly,current,minutely&appid=" + keys.openweather.id)
            .then(function (response) {
                res.json(response.data);

            })
    });
};