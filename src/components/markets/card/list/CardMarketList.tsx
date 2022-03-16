import { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CardMarketItem from '../item/CardMarketItem';

interface CardMarketListProps {

}

const CardMarketList: FC<CardMarketListProps> = () => {
    const coins = useTypedSelector(state => state.coins);

    return (
        <div className="markets__card-list custom-scroll">
            {
                coins.map((coin) => (
                    <CardMarketItem key={coin.id} coin={coin} />
                ))
            }
        </div>
    )
}

export default CardMarketList;