import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import bgDots from './images/bg-dots.webp';
import Table from './table/Table';

interface MarketsInfoProps {

}

const MarketsInfo: FC<MarketsInfoProps> = () => {
    const { t } = useTranslation();

    return (
        <section className="markets-info">
            <div className="markets-info__bg">
                <img className="markets-info__bg-img" src={bgDots} alt="" />
            </div>
            <div className="box-custom">
                <div className="markets-info__inner">
                    <div className="markets-info__subtitle subtitle">{t('landing.market-info.subtitle').toUpperCase()}</div>
                    <h2 className="markets-info__title title">{t('landing.market-info.title')}</h2>
                    <div className="markets-info__content">
                        <div className="markets-info__table custom-scroll">
                            <Table />
                        </div>
                    </div>
                    <div className="markets-info__link-wrap">
                        <Link className="markets-info__link" to='/markets'>{t('landing.market-info.view-all')}
                            <svg className="markets-info__link-icon" width="20" height="12">
                                <use xlinkHref="#arrow-right-icon"></use>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketsInfo;