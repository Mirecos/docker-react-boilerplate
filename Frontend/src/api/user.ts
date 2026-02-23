import axiosInstance from "./axiosInstance";
import { userRoutes } from "./routes";

export const updateUser = async (user: { id: number; email?: string; name?: string }) => {
    try {
        const response = await axiosInstance.patch(userRoutes.update, { user });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (userId: number) => {
    try {
        const response = await axiosInstance.delete(userRoutes.delete, { data: { user: { id: userId } } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (user: { email: string; password: string; name: string }) => {
    try {
        const response = await axiosInstance.post(userRoutes.createUser, { user });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const isIdentified = async () => {
    try {
        const response = await axiosInstance.get(userRoutes.isIdentified);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (user: { email: string; password: string; name: string }) => {
    try {
        const response = await axiosInstance.post(userRoutes.register, { user });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (user: { email: string; password: string }) => {
    try {
        const response = await axiosInstance.post(userRoutes.login, { user });
        return response.data;
    } catch (error) {
        throw error;
    }
};
