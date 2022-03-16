import { FC } from 'react';
import HeaderAdmin from '../shared/header/admin/HeaderAdmin';
import MarketMain from './main/MarketMain';
import '../../assets/css/markets-style.min.css';

interface PropsMarkets {
    
}

const Markets: FC<PropsMarkets> = () => {
    return (
        <div className="page theme">
            <div className="page__body dashboard">
                <HeaderAdmin />
                <MarketMain />
            </div>
        </div>
    )
}

export default Markets;
