import { FC, useState } from 'react';
import HeaderAdmin from './header/header/HeaderAdmin';
import MarketMain from './main/MarketMain';
import '../../assets/css/markets-style.min.css';
import { MarketsContext } from './context/MarketsContext';

interface PropsMarkets {
    
}

const Markets: FC<PropsMarkets> = () => {
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
