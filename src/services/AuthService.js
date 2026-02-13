import { authRequest, courseRequest } from "./request";

const API_URL = "/auth";

const refreshToken = () => {
    return authRequest.post(`${API_URL}/token/refresh/`, {});
};

const logout = () => {
    return authRequest.post(
        `${API_URL}/logout/`,
        {},
        {
            withCredentials: true,
        }
    );
};

const verifyToken = () => {
    return courseRequest.post(
        `${API_URL}/verify/`,
        {},
        {
            withCredentials: true,
        }
    );
};

const syncUserData = () => {
    return courseRequest.post(
        `${API_URL}/sync/`,
        {},
        {
            withCredentials: true,
        }
    );
};

const authService = { refreshToken, logout, verifyToken, syncUserData };

export default authService;
