import { FC } from 'react';
import './assets/css/not-found.css';
import MainNotFound from './main/MainNotFound';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ t('error.meta.title') }</title>
                <meta
                    name="description"
                    content={ t('error.meta.description') }
                    />
            </Helmet>
            <h1>
                404
            </h1>
            <MainNotFound />
            <h3>Not Found</h3>
        </div>
    )
}

export default NotFound;