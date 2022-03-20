import { FC, useState, useContext } from 'react';
import { selectCurrency, getSelectedDefaultCurrency } from '../../../../../helpers/currencies';
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

    return (
        <SelectCore values={selectCurrency} selected={selectedCurrency} onChange={handlerChangeCurrency} />
    );
}

export default Currency;