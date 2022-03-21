import { FC } from 'react';
import './assets/css/not-found.css';
import MainNotFound from './main/MainNotFound';

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = () => {
    return (
        <div >
            <h1>
                404
            </h1>
            <MainNotFound />
            <h3>Not Found</h3>
        </div>
    )
}

export default NotFound;