import { useState } from 'react';

const useFilters = () => {
    const [filtersMarkets, setFiltersMarkets] = useState({
        category: '',
        search: '',
        platform: '',
        coins: undefined,
        lastPrice: '',
    });
    const addFiltersMarkets = (filters: any) => {
        setFiltersMarkets({...filtersMarkets, ...filters});
    }

    return { filtersMarkets, addFiltersMarkets }
}

export default useFilters;