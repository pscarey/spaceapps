import { REQUEST_RECIPES, RECIEVE_RECIPES, SELECT_RECIPE } from '../actions/recipes';
import updateState from './update-state';

const initialState = {
    isLoading: false
};

const requestRecipes = (state, action) => {
    return updateState(state, { 
        isLoading: true,
        postcode: action.postcode,
        time: action.time
    });
};

const recieveRecipes = (state, action) => {
    return updateState(state, { 
        isLoading: false,
        recipes: action.recipes,
        error: action.error
    });
};

const selectRecipe = (state, action) => {
    return updateState(state, {
        currentRecipe: action.recipe
    });
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_RECIPES:
            return requestRecipes(state, action);
        case RECIEVE_RECIPES:
            return recieveRecipes(state, action);
        case SELECT_RECIPE:
            return selectRecipe(state, action);
        default:
            return state;
    }
}

