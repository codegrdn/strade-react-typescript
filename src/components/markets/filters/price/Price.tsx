import { t } from 'i18next';
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFilterMarketTableAction } from '../../../../store/reducers/MarketTableFilters';
import SelectCore from '../../../shared/select/core/SelectCore';

interface PriceProps {

}

const Price: FC<PriceProps> = () => {
    const dispatch = useDispatch();
    const values = [
        {
            value: '',
            label: t('markets.filters.price.Select Last Price'),
        },
        {
            value: 'Last Price Down',
            label: t('markets.filters.price.Last Price Down'),
        }, 
        {
            value: 'Last Price Up',
            label: t('markets.filters.price.Last Price Up'),
        }
    ];
    const [value, setValue] = useState(values[0]);
    
    function handlerFilterMarket(e: any): void {
        setValue(e);
        dispatch(addFilterMarketTableAction({lastPrice: e.value}))
    }

    return (
        <>
            <SelectCore selected={value} values={values} onChange={handlerFilterMarket} />
        </>
    )
}

export default Price;