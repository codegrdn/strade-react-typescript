import { User } from 'firebase/auth';
import { useState } from 'react';
import { IAuth } from '../context/AuthContext';

const useAuth: () => IAuth = () => {
    const itemUser: string | null = localStorage.getItem('user');
    const [user, setUser] = useState<User | null>(itemUser && JSON.parse(itemUser))

    const login = (newUser: User) => {
        setUser(newUser);

        localStorage.setItem('user', JSON.stringify(newUser));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    const isAuth = () => {
        return !!user;
    }

    return { user, login, logout, isAuth }
}

export default useAuth;