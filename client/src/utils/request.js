import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accesToken")
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, async function (error) {
    const originalConfig = error.config;
    if (error.response && error.response.status === 401) {
        console.log("Acess token expired");
        try {
            console.log("call api refresh token")
            const result = await instance.post("/api/v1/auth/refreshToken", {
                "refreshToken": window.localStorage.getItem("refreshToken")
            }).then(
                (data) => {
                    console.log(data.data.refreshToken)
                    window.localStorage.setItem("accesToken", data.data.accesToken);
                    window.localStorage.setItem("refreshToken", data.data.refreshToken);
                    originalConfig.headers['Authorization'] = `Bearer ${data.data.accesToken}`
                }
            )
            return instance(originalConfig)
        } catch (error) {
            window.localStorage.removeItem("accesToken");
            window.localStorage.removeItem("refreshToken");
            window.location.href = '/login'
        }
        return Promise.reject(error);
    }
    return Promise.reject(error);
});


export default instance;