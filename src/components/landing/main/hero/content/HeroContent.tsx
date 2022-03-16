import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HeroContentProps {

}

const HeroContent: FC<HeroContentProps> = () => {
    const { t } = useTranslation();

    return (
        <div className="hero__content">
            <div className="hero__subtitle">{ t('landing.hero.content.subTitle') }</div>
            <h1 className="hero__title">{ t('landing.hero.content.title') }</h1>
            <div className="hero__descr">
                <p>{ t('landing.hero.content.description') }</p>
            </div>
            
            <button className="hero__btn btn btn--green" data-modal="modal-2">{ t('landing.hero.content.free-account') }</button>
        </div>
    )
}

export default HeroContent;