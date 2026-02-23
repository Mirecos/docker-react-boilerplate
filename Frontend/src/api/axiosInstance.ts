import axios from "axios";
import { useUser } from "../context/userContext";

const axiosInstance = axios.create({
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Notify the app that the session has expired
            const userContext = useUser();
            userContext.clearSession();
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
