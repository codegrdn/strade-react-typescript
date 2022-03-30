import { findByLabelText } from '@testing-library/react';
import { FC, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { GroupBase, StylesConfig } from 'react-select';
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
            setValue(items.filter((item) => (item.value === value.value))[0]);

            setLoading(true);
            clearTimeout(timeout);
        }, 1500);
    }, [i18n.language])


    function handlerFilterMarket(e: any): void {
        setValue(e);
        filters.addFilter({ lastPrice: e.value });
    }

    //Тестовый конфиг для кастомного Select
    const customStyles: StylesConfig<ISelect, false, GroupBase<ISelect>> = {
        option: (provided, state) => ({
            padding: '5px',
            borderLeft: '3px solid transparent',
            textAlign: 'left',
            transition: 'color .3s, border .3s',
            width: '100%',
            ":hover": {
                borderLeft: '3px solid #24ac80',
            },
        }),
        control: () => ({
            width: '200px',
            display: 'flex',
            padding: '0px 0px 0px 0px',
        }),
        menuList: () => ({
            backgroundColor: 'rgba(var(--select-bg-color), 1)',
            border: '1px solid rgba(var(--primary-color),.05)',
            maxHeight: '15rem',
            overflowY: 'auto',
            scrollbarWidth: 'thin'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            paddingLeft: '5px',
            textAlign: 'left',
        }),
        dropdownIndicator: (provided, state) => ({
            transition: 'all .2s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
            padding: '5px'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }

    return (
        <>
            {
                !loading
                    ? <Loader isRevert={true} style={{ height: '24px', width: '24px' }} />
                    : <SelectCore
                        isSearchable={false}
                        selected={value}
                        values={items}
                        onChange={handlerFilterMarket}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
            }
        </>
    )
}

export default Price;