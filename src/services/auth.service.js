export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id":"-1", username, password })
    };
    alert('trying login...');
    return fetch('http://192.168.0.52:8080/api/login', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {
            // login successful if there's a user
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                alert('success!!'+JSON.stringify(user));
                //localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
