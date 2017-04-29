import request from 'request-promise-native';

export const REQUEST_RECIPES = 'recipes/REQUEST_RECIPES';
export const RECIEVE_RECIPES = 'recipes/RECIEVE_RECIPES';

export const requestRecipes = postcode => ({
    type: REQUEST_RECIPES,
    postcode: postcode
});

export const recieveRecipes = (recipes, error) => ({
    type: RECIEVE_RECIPES,
    recipes: recipes,
    error: error
});

export function getRecipes(postcode) {
  return function (dispatch) {
    dispatch(requestRecipes(postcode))
    
    var options = {
        uri: 'http://localhost:3000/recipes',
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