import { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { getLanguageByUrl } from '../helpers/language';
import { routes } from './routes';

interface CRoutesProps {
    
}

const CRoutes: FC<CRoutesProps> = () => {
    return (
        <Routes>
            {
                routes.map((route, i) => {
                    return (
                        <Route
                            path={route.path}
                            key={route.title}
                            element={<route.component />}
                        >
                        </Route>
                    )
                })
            }
        </Routes>
    )
}

export default CRoutes;