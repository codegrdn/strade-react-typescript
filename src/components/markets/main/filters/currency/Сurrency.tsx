import { FC, useState, useContext } from 'react';
import { GroupBase, StylesConfig } from 'react-select';
import { selectCurrency, getSelectedDefaultCurrency } from '../../../../../helpers/currencies';
import ISelect from '../../../../../types/ISelect';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { MarketMainContext } from '../../context/MarketMainContext';

interface CurrencyProps {

}

const Currency: FC<CurrencyProps> = () => {
    const { currency } = useContext(MarketMainContext);
    const [selectedCurrency, setSelectedCurrency] = useState(getSelectedDefaultCurrency(currency.currency));

    function handlerChangeCurrency(e: any): void {
        currency.changeCurrency(e.value);
        setSelectedCurrency(e);
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
            width: '100px',
            display: 'flex',
            padding: '0px 0px 0px 0px',
        }),
        menuList: () => ({
            backgroundColor: 'rgba(var(--select-bg-color), 1)',
            border: '1px solid rgba(var(--primary-color),.05)',
            maxHeight: '15rem',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
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
            values={selectCurrency}
            selected={selectedCurrency}
            onChange={handlerChangeCurrency}
            components={{
                IndicatorSeparator: () => null
            }}
            isSearchable={false}
        />
    );
}

export default Currency;