import { FC, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ISelect from '../../../../../types/ISelect';
import Loader from '../../../../shared/loader/Loader';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { MarketMainContext } from '../../context/MarketMainContext';

interface PriceProps {

}

const Price: FC<PriceProps> = () => {
    const [loading, setLoading] = useState(false);
    const { filters } = useContext(MarketMainContext);
    const { t, i18n } = useTranslation();
    const [items, setItems] = useState([
        {
            value: '',
            label: t('markets.filters.price.select-last-price'),
        },
        {
            value: 'Last Price Down',
            label: t('markets.filters.price.last-price-down'),
        }, 
        {
            value: 'Last Price Up',
            label: t('markets.filters.price.last-price-up'),
        }
    ]);
    const [value, setValue] = useState(items[0]);
    
    useEffect(() => {
        setLoading(false);

        const items = [
            {
                value: '',
                label: t('markets.filters.price.select-last-price'),
            },
            {
                value: 'Last Price Down',
                label: t('markets.filters.price.last-price-down'),
            }, 
            {
                value: 'Last Price Up',
                label: t('markets.filters.price.last-price-up'),
            }
        ];

        setItems(items);

        const timeout = setTimeout(() => {
            setValue(items.filter((item) => (item.value == value.value))[0]);
            
            setLoading(true);
            clearTimeout(timeout);
        }, 1500);
    }, [i18n.language])


    function handlerFilterMarket(e: any): void {
        setValue(e);
        filters.addFilter( { lastPrice: e.value } );
    }

    return (
        <>
            {
                !loading
                ? <Loader isRevert={true} style={{ height: '24px', width: '24px'}} />
                : <SelectCore selected={value} values={items} onChange={handlerFilterMarket} />
            }
        </>
    )
}

export default Price;