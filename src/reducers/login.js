import {
    LOGIN,
    LOGIN_SUCCESS,
    REMOTE_CALL_ERROR,
    RETRY_REMOTE_CALL
} from "../actions/login";

const initialState = {
    loggedIn: false
};

export default function reducer(state = initialState, action) {
    const {type, error, status} = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                error,
                loggedIn: false
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true
            };
        case REMOTE_CALL_ERROR:
            return {
                error,
                status,
                loggedIn: false
            };
        case RETRY_REMOTE_CALL:
            return {
                loggedIn: true
            };
        default:
            return state;
    }
}
