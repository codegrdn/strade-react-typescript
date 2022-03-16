import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Moment from 'react-moment';
import { articales } from './data/articales';

interface ArticalesProps {

}

const Articales: FC<ArticalesProps> = () => {
    const { t } = useTranslation();

    return (
        <div className="article">
            <ul className="article__list">
                {
                    articales.map((articale) => (
                        <li className="article__item" key={articale.id}>
                            <div className="article__item-row">
                                <a className="article__picture-link" href="#!">
                                    <div className="article__picture">
                                        <picture>
                                            <source
                                                type="image/webp"
                                                media="(min-width: 1200px)"
                                                srcSet={`${articale.images.desktopWebp}, ${articale.images.desktop2xWebp} 2x`} />
                                            <source
                                                type="image/webp"
                                                media="(min-width: 768px)"
                                                srcSet={`${articale.images.tabletWebp}, ${articale.images.tablet2xWebp} 2x`} />
                                            <source
                                                type="image/webp"
                                                srcSet={`${articale.images.mobileWebp}, ${articale.images.mobile2xWebp} 2x`} />
                                            <source
                                                media="(min-width: 1200px)"
                                                srcSet={`${articale.images.desktopJpg}, ${articale.images.desktop2xJpg} 2x`} />
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={`${articale.images.tabletJpg}, ${articale.images.tablet2xJpg} 2x`} />
                                            <img className="article__img"
                                                src={articale.images.mobileJpg}
                                                srcSet={articale.images.mobile2xJpg}
                                                alt={articale.id}
                                                width="300"
                                                height="154" />
                                        </picture>
                                    </div>
                                </a>
                                <Moment className="article__date" format="D MMM, YYYY" withTitle>{ articale.date }</Moment>
                                <h3 className="article__title">{ t(articale.title) }</h3>
                                <div className="article__descr">
                                    <p>{ t(articale.description) }</p>
                                </div>
                            </div>
                            <div className="article__item-row">
                                <a className="article__link" href="#!">{ t('landing.news.atricales.read-more') }
                                    <svg className="article__link-icon" width="20" height="12">
                                        <use xlinkHref="#arrow-right-icon"></use>
                                    </svg>
                                </a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Articales;