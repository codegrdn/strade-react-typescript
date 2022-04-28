import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCurrency } from '../../../../helpers/currencies';

const useCurrency = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currency, setCurrency] = useState<string>(getCurrency());

    const changeCurrency = (currency: string) => {
        if (currency) {
            setCurrency(currency);

            let newSearchParams = {...searchParams, currency: currency};
            setSearchParams(JSON.parse(JSON.stringify(newSearchParams, function replaceUndefinedOrNull(key, value) {
                if (!value) {
                    return undefined;
                }

                return value;
            })))
        }
    }

    return { currency, changeCurrency }
}

export default useCurrency;