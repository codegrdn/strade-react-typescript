import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import Articales from './articales/Articales';

interface NewsProps {

}

const News: FC<NewsProps> = () => {
    const { t } = useTranslation();

    return (
        <section className="news">
            <div className="box">
                <div className="news__subtitle subtitle">{ t('landing.news.subtitle') }</div>
                <h2 className="news__title title">{ t('landing.news.title') }</h2>
                
                <Articales />
            </div>
        </section>
    )
}

export default News;