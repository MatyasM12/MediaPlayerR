export const LOGIN = 'LOGIN';
export function login() {
    return {type: LOGIN};
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess() {
    return {type: LOGIN_SUCCESS};
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
