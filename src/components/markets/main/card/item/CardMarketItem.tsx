import { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import defaultCoin from '../../../../../helpers/coin';
import { getColorClass, getColor } from '../../../../../helpers/colors';
import { signCurrency } from '../../../../../helpers/currencies';
import { formatingPrice } from '../../../../../helpers/formating';
import ICoin from '../../../../../types/ICoin';
import CoinChart from '../../chart/CoinChart';
import useCoin from './hooks/useCoin';

interface CardMarketItemProps {
    coinId: string,
}

const CardMarketItem: FC<CardMarketItemProps> = ( { coinId } ) => {
    const { t } = useTranslation();
    const { coin, loading, currency } = useCoin(coinId);
    const [isLoading, setIsLoading] = useState(true)

    const coinCurrent: ICoin = useMemo(() => {
        if (loading) {
            const timeout = setTimeout(() => {
                setIsLoading(true);
                clearTimeout(timeout);
            }, 1500);

            return defaultCoin();
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
            clearTimeout(timeout);
        }, 1500);

        return coin;
    }, [coin, loading])


    return (
        <div className="markets__card">
            <div className="markets__card-title" style={{height: '18px'}}>
                {coinCurrent?.name}
            </div>
            <div className="markets__card-picture">
                {
                    !isLoading && <CoinChart
                        coinId={coinCurrent.id} 
                        color={getColor(coinCurrent.price_change_24h)} 
                        width={95} 
                        height={50}
                    />
                }
            </div>
            <div className="markets__card-bet">
                <span 
                    className={getColorClass(coinCurrent.price_change_24h)}
                >
                    {formatingPrice(coinCurrent.current_price, signCurrency[currency])}
                </span> 
                { coinCurrent.price_change_24h < 0 
                    ? formatingPrice((coinCurrent.current_price + coinCurrent.price_change_24h).toFixed(2), signCurrency[currency]) 
                    : formatingPrice((coinCurrent.current_price - coinCurrent.price_change_24h).toFixed(2), signCurrency[currency])
                }
            </div>
            <div className="markets__card-sum">
                <span 
                    className={getColorClass(coinCurrent.price_change_percentage_24h)}
                >
                    {formatingPrice(coinCurrent.price_change_percentage_24h.toFixed(2), '%')}
                </span> 
                { t('markets.card.market-cap')}: {formatingPrice(coinCurrent.market_cap, signCurrency[currency])}
            </div>
        </div>
    )
}

export default CardMarketItem;
