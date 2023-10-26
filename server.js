var express = require('express');
var app = express();
var fs = require("fs");

// Get movies
app.get('/listMovies', function (req, res) {
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

// Add movie
movie = {
    "movie6" : {
       "title" : "Inception",
       "director" : "Christopher Nolan",
       "genre" : "Sci-Fi",
       "IMDB link": "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Inception",
    }
 }

app.post('/addMovie', function (req, res) {
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["movie6"] = movie["movie6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

// Delete movie
app.delete('/deleteMovie', function (req, res) {
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["movie1"];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

// Get movie by ID
app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      var movies = JSON.parse( data );
      var movie = movies["movie" + req.params.id];
      console.log( movie );
      res.end( JSON.stringify(movie));
   });
})

var server = app.listen(8081, function () {
   console.log('Server running at http://127.0.0.1:8081/')
})
