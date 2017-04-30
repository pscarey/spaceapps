const recipesService = require('./services/recipes');
const ratingsService = require('./services/ratings');
const mapsService = require('./services/maps');
console.log('Starting whats-for-dinner server');


var express = require('express')
var app = express()
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/recipes', async function (req, res) {
  const userPostalCode = req.query.postalCode;
  const date = req.query.date || new Date();
  const recipes = await recipesService.findAll();
  const ratedRecipes = await ratingsService.calculate(recipes, userPostalCode, date );
  console.log(ratedRecipes[0].ratings);
  res.send(recipes);
})

app.listen(3000);
console.log('Server listening on port 3000');


mapsService.getZipLatLon(2560);
mapsService.getZipLatLon(2000);
