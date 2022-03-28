import { FC, useMemo, useState } from 'react';
import ICoin from '../../../../../types/ICoin';
import Loader from '../../../../shared/loader/Loader';
import CardMarketItem from '../item/CardMarketItem';
import useListCoins from './hooks/useListCoins';

interface CardMarketListProps {

}

const CardMarketList: FC<CardMarketListProps> = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { response }  = useListCoins();

    const coinsList: ICoin[] = useMemo(() => {
        if (!response?.data) {
            return [];
        }

        setIsLoading(false);

        const timeout = setTimeout(() => {
            setIsLoading(true);
            clearTimeout(timeout);
        }, 1500);

        return [...response?.data];
    }, [response]);

    console.log(coinsList)

    return (
        <div className="markets__card-list custom-scroll">
            {
                coinsList.length
                ? !isLoading
                    ? <Loader isRevert={true} style={{ height: '24px', width: '24px'}} />
                    :  coinsList.map((coin: ICoin, index) => (
                        <CardMarketItem key={index} coin={coin} />
                    ))
                : ''
            }
        </div>
    )
}

export default CardMarketList;