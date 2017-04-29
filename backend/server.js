const recipesService = require('./services/recipes');
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
  const recipes = await recipesService.findAll();
  res.send(recipes);
})

app.listen(3000);
