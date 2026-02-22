import { createContext, useContext } from "react";

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
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
