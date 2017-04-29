import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import app from './app';

const reducers = combineReducers({
    form,
    app
});

export default reducers;
