import { FC } from 'react';
import Category from '../category/Category';
import Currency from '../currency/Сurrency';
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
    },
    {
        component: Category,
        key: 'category'
    },
    {
        component: Currency,
        key: 'currency'
    }
];

export default filters;