import { FC, useState } from 'react';
import HeaderAdmin from './header/header/HeaderAdmin';
import MarketMain from './main/MarketMain';
import '../../assets/css/markets-style.min.css';
import { MarketsContext } from './context/MarketsContext';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

interface PropsMarkets {
    
}

const Markets: FC<PropsMarkets> = () => {
    const { t } = useTranslation();
    const [menuMobile, setMenuMobile] = useState(false);
    const toggleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    }

    return (
        <MarketsContext.Provider value={{
            menuMobile: {
                menuMobile: menuMobile,
                toggleMenuMobile: toggleMenuMobile
            }
        }} >
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ t('markets.meta.title') }</title>
                <meta
                    name="description"
                    content={ t('markets.meta.description') }
                    />
            </Helmet>

            <div className="page theme">
                <div className={"page__body dashboard" + (menuMobile ? ' no-scroll' : '')}>
                    <HeaderAdmin />
                    <MarketMain />
                </div>
            </div>
        </MarketsContext.Provider>
    )
}

export default Markets;
