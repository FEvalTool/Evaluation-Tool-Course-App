import axios from "axios";

const createService = (baseURL) => {
    return axios.create({
        baseURL,
        timeout: 0,
        withCredentials: true,
    });
};

export const courseRequest = createService(
    import.meta.env.VITE_COURSE_SERVICE_URL
);

export const authRequest = createService(import.meta.env.VITE_AUTH_SERVICE_URL);
