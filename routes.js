var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '')));

router.get('/', function (req, res) {
    console.log("hello router page here");
    res.render("index");
     //res.send("hello router page here")
    //res.sendFile('test.html', { root: __dirname });
});

router.get('/login', function (req, res) {
    console.log("hello login page here");
    res.render("login");
});
router.get('/about', function (req, res) {
    console.log("hello about page here");
    res.render("about");
});

module.exports = router;