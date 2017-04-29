const models = require('./models');
console.log('Starting whats-for-dinner server');


var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/recipes', async function (req, res) {
  const recipes = await getRecipes();
  res.send(recipes);
})

app.listen(3000)


async function getRecipes() {
  const res = await models.Recipe.findAll({
    include: [
      {
        model: models.RecipeItem,
        as: 'recipeItems',
        required: false,
        include: [
          {
            model: models.Ingredient,
            as: 'ingredient',
            include: [
              {
                model: models.Source,
                as: 'sources',
              },
              {
                model: models.Season,
                as: 'seasons',
              },
            ],
          },
        ]
      },
    ],
  });
  console.log('Recipe', res[0].id, 'RecipeItems Name', res[0].recipeItems[0].name, 'Ingredient ', res[0].recipeItems[0].ingredient.name, 'Source', res[0].recipeItems[0].ingredient.sources[0].name, 'Season', res[0].recipeItems[0].ingredient.seasons[0].name );
  return res;
}

const res = models.Ingredient.findAll().then((res) => {
  console.log('REsults', res[0].id, res[0].name )
});
