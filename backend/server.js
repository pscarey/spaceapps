const recipesService = require('./services/recipes');
console.log('Starting whats-for-dinner server');


var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/recipes', async function (req, res) {
  const recipes = await recipesService.findAll();
  res.send(recipes);
})

app.listen(3000);
