import { FC, useContext } from 'react';
import { MarketMainContext } from '../../context/MarketMainContext';
import CardMarketItem from '../item/CardMarketItem';

interface CardMarketListProps {

}

const CardMarketList: FC<CardMarketListProps> = () => {
    const { coins } = useContext(MarketMainContext);

    return (
        <div className="markets__card-list custom-scroll">
            {
                coins.list.map((coin) => (
                    <CardMarketItem key={coin.id} coin={coin} />
                ))
            }
        </div>
    )
}

export default CardMarketList;