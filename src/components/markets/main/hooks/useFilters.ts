import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFilters = () => {
    const [filtersMarkets, setFiltersMarkets] = useState({
        category: '',
        search: '',
        platform: '',
        coins: undefined,
        lastPrice: '',
    });

    const addFiltersMarkets = (filters: any) => {
        const newFilters = {...filtersMarkets, ...filters};
        setFiltersMarkets(newFilters);
    }

    return { filtersMarkets, addFiltersMarkets }
}

export default useFilters;