import React from "react";

interface IUser {
    id?: string,
    name?: string,
    email?: string,
    token?: string,
}

interface IAuth {
    user: IUser,
    create: () => void,
    login: () => void,
}

interface IAuthContext {
    auth: IAuth
}

export const authState: IAuthContext = {
    auth: {
        user: {},
        create: () => {},
        login: () => {},
    }
}

export const AuthContext = React.createContext<IAuthContext>(authState);