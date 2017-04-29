import request from 'request-promise-native';
import * as querystring from 'querystring';

export const REQUEST_RECIPES = 'recipes/REQUEST_RECIPES';
export const RECIEVE_RECIPES = 'recipes/RECIEVE_RECIPES';

export const requestRecipes = (postcode, time) => ({
    type: REQUEST_RECIPES,
    postcode: postcode,
    time: time
});

export const recieveRecipes = (recipes, error) => ({
    type: RECIEVE_RECIPES,
    recipes: recipes,
    error: error
});

export function getRecipes(postcode, time) {
  return function (dispatch) {
    dispatch(requestRecipes(postcode, time));
    
    var options = {
        uri: 'http://localhost:3000/recipes?' + querystring.stringify({
          postcode: postcode,
          time: time
        }),
        json: true
    };

    request(options).then(result => {
        dispatch(recieveRecipes(result, false));
    }).catch(error => {
        console.log(error);
        dispatch(recieveRecipes([], true));
    });
  }
}