import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCurrency, getSelectedDefaultCurrency } from '../../../../../helpers/currencies';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { changeCurrencyAction } from "../../../../../store/reducers/Currency";
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

interface CurrencyProps {

}

const Currency: FC<CurrencyProps> = () => {
    const dispatch = useDispatch();
    const { currency } = useTypedSelector(state => state.currency)
    const [selectedCurrency, setSelectedCurrency] = useState(getSelectedDefaultCurrency(currency));

    function handlerChangeCurrency(e: any): void {
        dispatch(changeCurrencyAction({currency: e.value}));
        setSelectedCurrency(e);
    }

    return (
        <SelectCore values={selectCurrency} selected={selectedCurrency} onChange={handlerChangeCurrency} />
    );
}

export default Currency;