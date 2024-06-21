import axios from "../utils/request";

const authApi = {
    login: (data) => {
        return axios.post("/api/v1/auth/login", data);
    },
    signup: (data) => {
        return axios.post("/api/v1/auth/register", data)
    },
    logout: (data) => {
        return axios.post("/api/v1/auth/logout", data)
    },
    refreshToken: (data) => {
        return axios.post("/api/v1/auth/refreshToken", data)
    },
    demo: () => {
        return axios.get("/api/v1/auth/testAuth")
    }
}

export default authApi;