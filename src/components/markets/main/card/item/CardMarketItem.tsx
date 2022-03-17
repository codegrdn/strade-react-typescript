import { FC } from 'react';
import { getColorClass, getColor } from '../../../../../helpers/colors';
import ICoin from '../../../../../types/ICoin';
import CoinChart from '../../chart/CoinChart';

interface CardMarketItemProps {
    coin: ICoin,
}

const CardMarketItem: FC<CardMarketItemProps> = ( { coin } ) => {
    return (
        <div className="markets__card">
            <div className="markets__card-title">
                {coin.name}
            </div>
            <div className="markets__card-picture">
                <CoinChart
                    coinId={coin.id} 
                    color={getColor(coin.price_change_24h)} 
                    width={105} 
                    height={55}
                />
            </div>
            <div className="markets__card-bet">
                <span 
                    className={getColorClass(coin.price_change_24h)}
                >
                    {coin.current_price}
                </span> 
                { coin.price_change_24h > 0 ? (coin.current_price + coin.price_change_24h).toFixed(2) : (coin.current_price - coin.price_change_24h).toFixed(2) }
            </div>
            <div className="markets__card-sum">
                <span 
                    className={getColorClass(coin.price_change_percentage_24h)}
                >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </span> 
                Market Cap: {coin.market_cap}
            </div>
        </div>
    )
}

export default CardMarketItem;
