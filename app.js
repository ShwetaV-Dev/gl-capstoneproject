var express = require('express');
var path = require('path');

var routes = require('./routes');
var app = express();
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '')));

// define routes here..

app.set("port", process.env.port || 8080)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function () {
    console.log('Server started on port..', app.get("port"));
});

