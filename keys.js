console.log('this is loaded');
exports.openweather = {
  id: process.env.OpenWeather_ID
};
exports.eventbrite = {
    key: process.env.EventBrite_API_Key,
    secret: process.env.EventBrite_Client_Secret
  };

  var keys = require("./keys.js");