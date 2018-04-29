import {
    LOGIN,
    LOGIN_SUCCESS,
    REMOTE_CALL_ERROR,
    RETRY_REMOTE_CALL,
    LOGOUT
} from "../actions/login";

const initialState = {
    loggedIn: false,
    username: '',
    password: ''
};

export default function reducer(state = initialState, action) {
    const {type, error, status} = action;
    switch (type) {
        // case LOGIN:
        //     return {
        //         ...state,
        //         error,
        //         loggedIn: false
        //     };
        case LOGIN:
            alert('login success');
            return {
                loggedIn: true,
                username: action.username,
                password: action.password
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
        case LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state;
    }
}
