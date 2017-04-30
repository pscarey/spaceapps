import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postcode from './postcode';
import recipes from './recipes';

const reducers = {
    form: formReducer,
    postcode: postcode,
    recipes: recipes
};

export default combineReducers(reducers);
