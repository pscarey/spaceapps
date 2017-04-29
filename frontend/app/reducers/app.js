import {
    SET_ERROR_ACTION,
    SET_SUCCESS_ACTION,
    ACKNOWLEDGE_MESSAGE_ACTION,
    SET_LOADING_ACTION
} from '../actions/app';
import updateState from './update-state';

const initialState = {
    messages: [],
    lastMessageId: 0,
    isLoading: false,
};

const addMessage = (state, action, type) => updateState(state, {
    messages: state.messages
        .filter(message => message.text !== action.messageText)
        .concat({
            id: state.lastMessageId++,
            text: action.messageText,
            type,
        }),
    isLoading: false,
});


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR_ACTION:
            return addMessage(state, action, 'error');
        case SET_SUCCESS_ACTION:
            return addMessage(state, action, 'success');
        case ACKNOWLEDGE_MESSAGE_ACTION:
            return updateState(state, {
                messages: state.messages.filter(message => message.id !== action.messageId)
            });
        case SET_LOADING_ACTION:
            return updateState(state, {
                isLoading: action.isLoading
            });
        default:
            return state;
    }
}

