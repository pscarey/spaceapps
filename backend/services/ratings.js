var createSeasonResolver = require('date-season')
var mapsService = require('./maps');
var distance = require('gps-distance');
const seasonResolver = createSeasonResolver({ north: false, autumn: true });
const MIN_RATING = 1;
const MAX_RATING = 5;
const NUMBER_OF_RATINGS = 6;
const ratingConversion = [0,5,4,3,2,1];

function getSeasonForDate(date) {
  return seasonResolver(date);
}
function calculateDistance(loc1, loc2) {
  console.log('Calculating distance for', loc1, loc2);
  var result = distance(loc1.lat,  loc1.lng, loc2.lat, loc2.lng);
  console.log('DIstance was:' , result);
  return result;
}
// TODO
async function calculateDistanceToClosestSource(sources, userPostalCode) {
    const location = await mapsService.getZipLatLon(userPostalCode);
    console.log('Obtained location', location);
    let minDistance = 50000;
    sources.forEach((source) => {
      console.log('Source', source.lat, source.lon);
      let distance = calculateDistance({lat:source.lat, lng: source.lon}, location);
      if (distance < minDistance) {
        minDistance = distance;
      }
    });
    console.log('Min Distance Was', minDistance);
    return minDistance;
}

function getRating(minValue, maxValue, value) {
  const slotsSize = maxValue / MAX_RATING;
  let rating = value / slotsSize;
  if (rating > MAX_RATING) {
    rating = MAX_RATING;
  }
  console.log('Rating', rating);
  rating = ratingConversion[rating];
  console.log('Converted rating', rating);
  return rating;
}



function calculateCo2Rating(co2ConsumptionPerKg, ingredientQuantity) {
  console.log('Calculating Co2Rating for value', co2ConsumptionPerKg, ingredientQuantity);
  const minValue = 0;
  const maxValue = 50;
  const co2ConsumptionRecipe = co2ConsumptionPerKg * ingredientQuantity;
  const rating = getRating(minValue, maxValue, co2ConsumptionRecipe  );
  console.log('Co2 Rating for ', co2ConsumptionPerKg, ingredientQuantity, rating);
  return rating;
}

function calculateWaterRating(value) {
  const minValue = 0;
  const maxValue = 50;
  return getRating(minValue, maxValue, value);
}
function calculateDaysToProduceRating(value) {
  const minValue = 0;
  const maxValue = 50;
  return getRating(minValue, maxValue, value);
}

function calculateEnergyRating(value) {
  const minValue = 0;
  const maxValue = 50;
  return getRating(minValue, maxValue, value);
}

function calculateSeasonRating(ingredientSeasons, forDate) {
  const season = getSeasonForDate(forDate);
  console.log('Season for date is', season);
  let rating = MIN_RATING;

  ingredientSeasons.forEach((ingredientSeason) => {
    if (ingredientSeason.name === season) {
      rating = MAX_RATING;
    }
  });
  return rating;
}

async function  calculateDistanceRating(sources, userPostalCode) {
  const distanceToFoodSource = await calculateDistanceToClosestSource(sources, userPostalCode);
  const minValue = 0;
  const maxValue = 2000;
  return getRating(minValue, maxValue, distanceToFoodSource);
}
function getTotalRating(ratings, items) {
  console.log('Total Rating', ratings, items);
  const total = ratings.co2Rating + ratings.waterRating + ratings.energyRating
  + ratings.daysToProduceRating + ratings.distanceRating + ratings.seasonRating;
  return total / items;
}
function average (value, totalItems) {
  console.log('Total Items', totalItems, 'value', value);
  return value / totalItems;
}
module.exports = {
  calculate: async function (recipes, userPostalCode, forDate) {
    recipes.forEach((recipe) => {
      let co2 = 0 ;
      let water = 0;
      let energy = 0;
      let distance = 0;
      let seasonRating = 0;
      let daysToProduce = 0;
      recipe.recipeItems.forEach(async (recipeItem) => {
        const ingredient = recipeItem.ingredient;
        co2 += calculateCo2Rating(ingredient.co2, recipeItem.quantity);
        energy += calculateEnergyRating(ingredient.energyUsedToProduce);
        daysToProduce += calculateDaysToProduceRating(ingredient.daysToProduce);
        water += calculateWaterRating(ingredient.water);
        distance += await calculateDistanceRating(ingredient.sources, userPostalCode);
        seasonRating += calculateSeasonRating(ingredient.seasons, forDate);
      });
      const ratingsForRecipe = {
        co2Rating: average(co2, recipe.recipeItems.length),
        waterRating: average(water, recipe.recipeItems.length),
        energyRating: average(energy, recipe.recipeItems.length),
        daysToProduceRating: average(daysToProduce, recipe.recipeItems.length),
        distanceRating: average(distance, recipe.recipeItems.length),
        seasonRating: average(seasonRating, recipe.recipeItems.length),
      };
      recipe.ratings = ratingsForRecipe;
      recipe.totalRating = getTotalRating(ratingsForRecipe, NUMBER_OF_RATINGS);
    });
    return recipes;
  }
}
