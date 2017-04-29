import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const reducers = {
    form: formReducer,
    app: app
};

export default combineReducers(reducers);
