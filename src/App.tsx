import { FC } from 'react';
import { ReactComponent as Sprite } from './components/shared/svg/sprite.svg';
import { BrowserRouter } from 'react-router-dom';
import CRoutes from './route/CRoutes';


const App: FC = () => {
    return (
        <div className="App">
            <Sprite />

            <BrowserRouter>
                <CRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
