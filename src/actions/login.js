import {userService} from "../services/auth.service";
import {userConstants} from "../constants/user.constants";

export const LOGIN = 'LOGIN';

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alert(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSuccess() {
    return {type: LOGIN_SUCCESS};
}

export const LOGOUT = 'LOGOUT';

export function logout() {
    return {type: LOGOUT}
}

export const REMOTE_CALL_ERROR = 'REMOTE_CALL_ERROR';

export function remoteCallError(response) {
    const {status, error} = response;
    return {
        type: REMOTE_CALL_ERROR,
        status, error,
    };
}

export const RETRY_REMOTE_CALL = 'RETRY_REMOTE_CALL';

export function retryRemoteCall() {
    return {type: RETRY_REMOTE_CALL};
}
