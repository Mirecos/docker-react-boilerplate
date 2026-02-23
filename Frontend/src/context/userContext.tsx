import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
    loginUser,
    registerUser,
    isIdentified,
    updateUser as apiUpdateUser,
    deleteUser,
} from "../api/user";

export interface UserInfo {
    id: number;
    email: string;
    name: string;
}

export interface UserContextType {
    user: UserInfo | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    updateUser: (data: { email?: string; name?: string }) => Promise<void>;
    deleteAccount: () => Promise<void>;
    clearSession: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

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

    const clearSession = () => {
        setUser(null);
        setIsAuthenticated(false);
    }

    const value: UserContextType = {
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        deleteAccount,
        clearSession
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

