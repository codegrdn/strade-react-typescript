import { getAllQueryParams } from './../../../../helpers/queryRoute';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCoins = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [coinsList, setCoinsList] = useState<string[]>(searchParams.getAll('coins') ?? []);

    const removeCoin = (coinId: string) => {
        setCoinsList(coinsList.filter((item: string) => item !== coinId));

        setSearchParams({
            ...getAllQueryParams(),
            coins: [...coinsList.filter((item: string) => item !== coinId) ]
        })
    }
    
    const addCoin = (coin: string) => {
        setCoinsList([...coinsList, coin]);

        setSearchParams({
            ...getAllQueryParams(),
            coins: [...coinsList, coin ]
        })
    }

    return {coinsList, removeCoin, addCoin}
}

export default useCoins;