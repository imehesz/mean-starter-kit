var express = require("express");
var app = express();
var mongoose = require("mongoose")

var db = require("./config/db");
var port = process.env.PORT || 8080;

app.configure(function(){
  app.use(express.static(__dirname + "/public"));
  app.use(express.logger("dev"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

require("./app/routes")(app);

app.listen(port);
console.log("Magic happens on port " + port);
exports = module.exports = app;