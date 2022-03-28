import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { getColorClass, getColor } from '../../../../../helpers/colors';
import { signCurrency } from '../../../../../helpers/currencies';
import { formatingPrice } from '../../../../../helpers/formating';
import ICoin from '../../../../../types/ICoin';
import CoinChart from '../../chart/CoinChart';
import { MarketMainContext } from '../../context/MarketMainContext';

interface CardMarketItemProps {
    coin: ICoin,
}

const CardMarketItem: FC<CardMarketItemProps> = ( { coin } ) => {
    const { t } = useTranslation();
    const { currency } = useContext(MarketMainContext);

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
                    {formatingPrice(coin.current_price, signCurrency[currency.currency])}
                </span> 
                { coin.price_change_24h < 0 
                    ? formatingPrice((coin.current_price + coin.price_change_24h).toFixed(2), signCurrency[currency.currency]) 
                    : formatingPrice((coin.current_price - coin.price_change_24h).toFixed(2), signCurrency[currency.currency])
                }
            </div>
            <div className="markets__card-sum">
                <span 
                    className={getColorClass(coin.price_change_percentage_24h)}
                >
                    {formatingPrice(coin.price_change_percentage_24h.toFixed(2), '%')}
                </span> 
                { t('markets.card.market-cap')}: {formatingPrice(coin.market_cap, signCurrency[currency.currency])}
            </div>
        </div>
    )
}

export default CardMarketItem;
