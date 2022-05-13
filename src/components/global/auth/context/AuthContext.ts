import { User } from "@firebase/auth";
import React from "react";

export interface IAuth {
    user: User | null,
    login: (newUser: User) => void,
    logout: () => void,
    isAuth: () => boolean
}

interface IAuthContext {
    auth: IAuth
}

export const authState: IAuthContext = {
    auth: {
        user: null,
        login: (newUser: User) => {},
        logout: () => {},
        isAuth: () => { return true; }
    }
}

export const AuthContext = React.createContext<IAuthContext>(authState);