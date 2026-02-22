import React, { useState, useEffect, ReactNode } from "react";
import { UserContext, UserInfo } from "../context/userContext";
import {
    loginUser,
    registerUser,
    isIdentified,
    updateUser as apiUpdateUser,
    deleteUser,
} from "../api/user";

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is already authenticated on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await isIdentified();
                if (response?.data?.user) {
                    setUser(response.data.user);
                    setIsAuthenticated(true);
                }
            } catch {
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await loginUser({ email, password });
        if (response?.data?.user) {
            setUser(response.data.user);
        }
        setIsAuthenticated(true);
    };

    const register = async (name: string, email: string, password: string) => {
        const response = await registerUser({ name, email, password });
        if (response?.data?.user) {
            setUser(response.data.user);
        }
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const updateUser = async (data: { email?: string; name?: string }) => {
        if (!user) return;
        await apiUpdateUser({ id: user.id, ...data });
        setUser((prev) => (prev ? { ...prev, ...data } : null));
    };

    const deleteAccount = async () => {
        if (!user) return;
        await deleteUser(user.id);
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                isAuthenticated,
                isLoading,
                login,
                register,
                logout,
                updateUser,
                deleteAccount,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
