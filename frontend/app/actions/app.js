export const SET_ERROR_ACTION = 'app/SET_ERROR_ACTION';
export const SET_SUCCESS_ACTION = 'app/SET_SUCCESS_ACTION';
export const ACKNOWLEDGE_MESSAGE_ACTION = 'app/ACKNOWLEDGE_MESSAGE_ACTION';
export const SET_LOADING_ACTION = 'app/SET_LOADING_ACTION';

export const notifyError = messageText => ({
    type: SET_ERROR_ACTION,
    messageText,
});

export const notifySuccess = messageText => ({
    type: SET_SUCCESS_ACTION,
    messageText,
});

export const setLoading = isLoading => ({
    type: SET_LOADING_ACTION,
    isLoading,
});

export const acknowledgeMessage = messageId => ({
    type: ACKNOWLEDGE_MESSAGE_ACTION,
    messageId,
});
