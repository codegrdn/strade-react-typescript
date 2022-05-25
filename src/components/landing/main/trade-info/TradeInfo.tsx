import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import tradeDesktopPng from './images/trade-desktop.png';
import tradeDesktop2xPng from './images/trade-desktop@2x.png';
import tradeDesktopWebp from './images/trade-desktop.webp';
import tradeDesktop2xWebp from './images/trade-desktop@2x.webp';

import tradeTabletPng from './images/trade-tablet.png';
import tradeTablet2xPng from './images/trade-tablet@2x.png';
import tradeTabletWebp from './images/trade-tablet.webp';
import tradeTablet2xWebp from './images/trade-tablet@2x.webp';

import tradeMobilePng from './images/trade-mobile.png';
import tradeMobile2xPng from './images/trade-mobile@2x.png';
import tradeMobileWebp from './images/trade-mobile.webp';
import tradeMobile2xWebp from './images/trade-mobile@2x.webp';
import LazyLoad from 'react-lazyload';

interface TradeInfoProps {

}

const TradeInfo: FC<TradeInfoProps> = () => {
    const { t } = useTranslation();

    return (
        <section className="trade-info">
            <div className="box">
                <h2 className="trade-info__title title">{ t('landing.trade-info.title') }</h2>
                <div className="trade-info__descr">
                    <p>{ parse(t('landing.trade-info.description')) }</p>
                </div>
            </div>
            <div className="trade-info__picture">
                <LazyLoad height={144} once>
                    <picture>
                        <source 
                            type="image/webp" 
                            media="(min-width: 1200px)" 
                            srcSet={`${tradeDesktopWebp}, ${tradeDesktop2xWebp} 2x`} />
                        <source 
                            type="image/webp" 
                            media="(min-width: 768px)" 
                            srcSet={`${tradeTabletWebp}, ${tradeTablet2xWebp} 2x`} />
                        <source 
                            type="image/webp" 
                            srcSet={`${tradeMobileWebp}, ${tradeMobile2xWebp} 2x`} />
                        <source 
                            media="(min-width: 1200px)" 
                            srcSet={`${tradeDesktopPng}, ${tradeDesktop2xPng} 2x`} />
                        <source 
                            media="(min-width: 768px)" 
                            srcSet={`${tradeTabletPng}, ${tradeTablet2xPng} 2x`} />
                        <img
                            className="trade-info__image"
                            src={tradeMobilePng}
                            srcSet={tradeMobile2xPng}
                            alt="trade"
                            width="300"
                            height="144" />
                    </picture>
                </LazyLoad>
                
            </div>
        </section>
    )
}

export default TradeInfo;