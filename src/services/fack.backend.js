import { getInfo } from '../util/profile';

export const configureFakeBackend = () => {

    const token = localStorage.getItem('token');
    console.log(token);

    let realFetch = window.fetch;
    window.fetch = async function (url, opts) {
        console.log(url, opts);

        const isLoggedIn = opts.headers['Authorization'] === `Bearer ${token}`;
        
        console.log("isLogin", isLoggedIn);

        const res = await getInfo();
        console.log("info", res);
    
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    return ok(token);
                }

                // get users - secure
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok({});
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                function error(message) {

                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}

export function handleResponse(response) {
    console.log("handleResponse");
    return response?.text()?.then(text => {
        const data = text ? JSON.parse(text) : '';
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                localStorage.removeItem('token')
            }
        }
        return data;
    });
}

export function authHeader() {
    console.log("authHeader");
    // return authorization header with jwt token
    const token = localStorage.getItem('token');
    console.log("token", token);
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}