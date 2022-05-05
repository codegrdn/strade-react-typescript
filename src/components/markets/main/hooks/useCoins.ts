import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCoins = (addFiltersMarkets: any) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [coinsList, setCoinsList] = useState<string[]>(searchParams.get('coins')?.split(',') ?? []);

    const removeCoin = (coinId: string) => {
        addFiltersMarkets({
            coins: coinsList.filter((item: string) => item !== coinId).join(',')
        })

        setCoinsList(coinsList.filter((item: string) => item !== coinId));
    }
    
    const addCoin = (coin: string) => {
        addFiltersMarkets({
            coins: [...coinsList, coin].join(',')
        })

        setCoinsList([...coinsList, coin]);
    }

    return {coinsList, removeCoin, addCoin}
}

export default useCoins;