import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { features } from './data/features';
import parse from 'html-react-parser';
import LazyLoad from 'react-lazyload';

interface HeroFeaturesProps {

}

const HeroFeatures: FC<HeroFeaturesProps> = () => {
    const { t } = useTranslation();

    return (
        <section className="features">
            <ul className="features__list">
                {
                    features.map((feature) => (
                        <li className="features__item" key={ feature.id }>
                            <LazyLoad height='20' once={true}>
                                <img width='20px' height='20px' className="features__icon" src={ feature.image } alt="" />
                            </LazyLoad>
                            <h2 className="features__title">{ parse(t(feature.title)) }</h2>
                            <p className="features__descr">{ t(feature.desciption) }</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default HeroFeatures;