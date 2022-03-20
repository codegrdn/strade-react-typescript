import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { MarketMainContext } from '../../context/MarketMainContext';

interface PriceProps {

}

const Price: FC<PriceProps> = () => {
    const { filters } = useContext(MarketMainContext);
    const { t } = useTranslation();

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
        filters.addFilter( { lastPrice: e.value } );
    }

    return (
        <>
            <SelectCore selected={value} values={values} onChange={handlerFilterMarket} />
        </>
    )
}

export default Price;