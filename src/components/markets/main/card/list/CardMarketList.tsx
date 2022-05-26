import { FC, useContext } from 'react';
import { MarketMainContext } from '../../context/MarketMainContext';
import CardMarketItem from '../item/CardMarketItem';

interface CardMarketListProps {

}

const CardMarketList: FC<CardMarketListProps> = () => {
    const { coins } = useContext(MarketMainContext);
    return (
        <div className="markets__card-list">
            {
                coins.list.length > 0
                    && coins.list.map((coin: string) => (
                            <CardMarketItem key={coin} coinId={coin} />
                        ))
            }
        </div>
    )
}

export default CardMarketList;