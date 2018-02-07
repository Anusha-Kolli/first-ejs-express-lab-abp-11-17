var express = require('express')
var app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
   const welcomeText = "Welcome to EJS"
  resp.render('index',{welcomeText: welcomeText})
})

// Build Your Route Here


module.exports = app
