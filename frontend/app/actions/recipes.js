export const REQUEST_RECIPES = 'recipes/REQUEST_RECIPES';
export const RECIEVE_RECIPES = 'recipes/RECIEVE_RECIPES';

export const requestRecipes = postcode => ({
    type: REQUEST_RECIPES,
    postcode: postcode
});

export const recieveRecipes = recipes => ({
    type: RECIEVE_RECIPES,
    recipes: recipes
});

export function getRecipes(postcode) {
  return function (dispatch) {
    dispatch(requestRecipes(postcode))

    setTimeout(()=>{
      // TODO replace with API call.
      dispatch(recieveRecipes([
        { name: 'one', id: '0', score: '80'},
        { name: 'two', id: '0', score: '50'},
        { name: 'three', id: '0', score: '60'},
      ]));
    }, 3000);
  }
}