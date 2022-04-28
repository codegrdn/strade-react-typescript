import { FC } from 'react';
import { ReactComponent as Sprite } from './components/shared/svg/sprite.svg';
import { BrowserRouter } from 'react-router-dom';
import CRoutes from './route/CRoutes';
import { useLanguage } from './helpers/language';


const App: FC = () => {
    let prefix = useLanguage !== 'en' ? '/' + useLanguage : '/';

    return (
        <div className="App">
            <Sprite />

            <BrowserRouter basename={prefix} >
                <CRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
