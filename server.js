require("dotenv").config();
var express = require("express");

/* cross origin resource sharing, express api with a react front end, 
makes it where you can't call JS from another JS file if domains don't match up. Browser won't let us call
the back end without it. This allows us to use script from anywhere. DO NOT TOUCH! */
var cors = require('cors');

const mongoose = require("mongoose");
//const routes = require("./routes/apiRoutes");


const app = express();

var axios = require('axios')
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* Another part of cors do not touch! */
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add api routes to app
require("./routes/apiRoutes")(app);


// Connect to the Mongo DB
//mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/db";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error"))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});