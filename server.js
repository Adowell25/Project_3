const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes/apiRoutes");
const app = express();

var axios = require('axios')
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use("/api", routes);

// Connect to the Mongo DB
//mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/calm-coast-29141";
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error"))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});