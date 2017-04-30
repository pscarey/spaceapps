import { SET_POSTCODE } from '../actions/postcode';
import updateState from './update-state';

const initialState = '';

const setPostcode = (state, action) => {
    return updateState(state, action.postcode);
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POSTCODE:
            return setPostcode(state, action);
        default:
            return state;
    }
}

