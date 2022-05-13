import { FC } from 'react';
import { ReactComponent as Sprite } from './components/shared/svg/sprite.svg';
import { BrowserRouter } from 'react-router-dom';
import CRoutes from './route/CRoutes';
import { useLanguage } from './helpers/language';
import { AuthContext } from './components/global/auth/context/AuthContext';
import useAuth from './components/global/auth/hooks/useAuth'

const App: FC = () => {
    let prefix = useLanguage !== 'en' ? '/' + useLanguage : '/';
    const { user, login, logout, isAuth } = useAuth();

    return (
        <AuthContext.Provider value={
            {
                auth: {
                    user: user,
                    login: login,
                    logout: logout,
                    isAuth: isAuth,
                }
            }
        }>
            <div className="App">
                <Sprite />

                <BrowserRouter basename={prefix} >
                    <CRoutes />
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
