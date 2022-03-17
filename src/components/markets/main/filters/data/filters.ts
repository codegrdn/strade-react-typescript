import { FC } from 'react';
import Platform from '../platform/Platform';
import Price from '../price/Price';

interface Filters {
    data?: FiltersData,
    key: string,
    component: FC
}

interface FiltersData {
    
}

const filters: Filters[] = [
    {
        component: Platform,
        key: 'platform'
    },
    {
        component: Price,
        key: 'price'
    }
];

export default filters;