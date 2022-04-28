import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filtersMarkets, setFiltersMarkets] = useState({
        category: '',
        search: '',
        platform: '',
        coins: undefined,
        lastPrice: '',
        ...searchParams
    });

    const addFiltersMarkets = (filters: any) => {
        const newFilters = {...filtersMarkets, ...filters};
        
        setSearchParams(JSON.parse(JSON.stringify(newFilters, function replaceUndefinedOrNull(key, value) {
            if (!value) {
                return undefined;
            }

            return value;
        })))

        setFiltersMarkets(newFilters);
    }

    return { filtersMarkets, addFiltersMarkets }
}

export default useFilters;