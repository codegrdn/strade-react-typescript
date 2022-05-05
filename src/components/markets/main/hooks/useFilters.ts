import { getAllQueryParams } from './../../../../helpers/queryRoute';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MarketTableFiltersState } from '../context/MarketMainContext';

const useFilters = () => {
    const allQueryParams = getAllQueryParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filtersMarkets, setFiltersMarkets] = useState<MarketTableFiltersState>({
        category: '',
        search: '',
        platform: '',
        coins: undefined,
        lastPrice: '',
        page: undefined,
        perPage: undefined,
        isFavorite: false,
        currency: '',
        ...allQueryParams
    });

    const addFiltersMarkets = (filters: any) => {
        const newFilters = {...getAllQueryParams(), ...filters};
        
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