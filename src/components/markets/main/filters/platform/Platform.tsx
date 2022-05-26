import { useState, useMemo, FC, useContext } from 'react';
import { useTranslation } from "react-i18next";
import SelectCore from '../../../../shared/select/core/SelectCore';
import ISelect from '../../../../../types/ISelect';
import { MarketMainContext } from '../../context/MarketMainContext';
import { GroupBase, StylesConfig } from 'react-select';

interface PlatformProps {

}

const Platform: FC<PlatformProps> = () => {
    const { t, i18n } = useTranslation();
    const { platforms, filters } = useContext(MarketMainContext);
    const [value, setValue] = useState<ISelect>({
        label: t('markets.filters.select-platform'),
        value: 0
    });
    const [loading, setLoading] = useState(false);

    const values = useMemo(() => {
        setLoading(false);

        if (Object.keys(platforms.list).length < 2) {
            return [{
                label: t('markets.filters.select-platform'),
                value: 0
            }];
        }

        let key = Object.keys(platforms.list);
        let array: ISelect[] = [];

        key.forEach((item) => {
            let label = item.replaceAll('-', ' ');
            label = label.charAt(0).toUpperCase() + label.slice(1);

            array.push({
                label: label,
                value: item,
            });
        });

        const result = [{
            label: t('markets.filters.select-platform'),
            value: 0
        }, ...array];

        setValue(filters.list.platform ? result.filter((item) => (item.value === filters.list.platform))[0] : result.filter((item) => (item.value === value.value))[0]);

        const timeout = setTimeout(() => {
            setLoading(true);
            clearTimeout(timeout);
        }, 1500);

        return result;
    }, [platforms.list, i18n.language])

    function handlerFilterMarket(e: any): void {
        setValue(e);
        filters.addFilter({ platform: e.value });
    }

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
        <SelectCore
            styles={customStyles}
            selected={value}
            values={values}
            onChange={handlerFilterMarket}
            components={{
                IndicatorSeparator: () => null
            }}
            isDisabled={!loading}
        />
    )
}

export default Platform;
