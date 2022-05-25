import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getPrice } from '../../../../../api/rest/SimpleService';
import useRequest from '../../../../../hooks/useRequest';
import SelectCore from '../../../../shared/select/core/SelectCore';
import { paymentMethods } from './data/payment-method';
import { coins, coinIds } from './data/coins';
import { currency } from './data/currency';
import { roundingValue } from '../../../../../helpers/math';
import { LandingContext } from '../../../context/LandingContext';

interface PurchaseProps {

}

const HeroPurchase: FC<PurchaseProps> = () => {
    const { t } = useTranslation();
    const { createModal } = useContext(LandingContext);

    const [paymentMethod, setPaymentMethod] = useState('visa');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');

    const [toCurrency, setToCurrency] = useState(coins[0]);
    const [fromCurrency, setFromCurrency] = useState(currency[0]);

    const [isLoading, setIsLoading] = useState(false);

    const config = useMemo(() => {
        return getPrice({
            vs_currencies: fromCurrency.value.toString(),
            ids: coinIds.join(),
        })
    }, [fromCurrency]);

    const { response, sendData, loading } = useRequest(config);

    useEffect(() => {
        if (!loading) {
            sendData(config);
        }
    }, [config])

    const prices = useMemo(() => {
        setIsLoading(false);

        let prices: any = {};
        if (response?.data) {
            coinIds.forEach(item => {
                prices[item] = response?.data[item][fromCurrency.value]
            })

            if (!to) {
                setFrom('');
                setTo('');
            } else {
                setTo(to);
                setFrom(String(roundingValue(Number(to) * prices[toCurrency.value])));
            }

            const timeout = setTimeout(() => {
                setIsLoading(true);
                clearTimeout(timeout);
            }, 1500);
        }

        return prices;
    }, [response]);

    function handleChangeСurrencyForFrom(e: any) {
        setFromCurrency(e);
    }

    function handleChangeСurrencyForTo(e: any) {
        setToCurrency(e);

        if (!to) {
            setFrom('');
            setTo('');
        } else {
            setTo(to);
            setFrom(String(roundingValue(Number(to) * prices[e.value])));
        }
    }

    function handleChangePaymentMethod(e: any) {
        setPaymentMethod(e.target.getAttribute('data-key'));
    }

    function handleChangeFrom(e: any) {
        if (!e.target.value) {
            setFrom('');
            setTo('');
            return;
        }

        setFrom(e.target.value);
        setTo(String(roundingValue(Number(e.target.value) / prices[toCurrency.value])));
    }

    function handleChangeTo(e: any) {
        if (!e.target.value) {
            setFrom('');
            setTo('');
            return;
        }

        setTo(e.target.value);
        setFrom(String(roundingValue(Number(e.target.value) * prices[toCurrency.value])));
    }

    return (
        <div className="hero__purchase">
            <div className="purchase">
                <div className="purchase__converter converter">
                    <h2 className="converter__title">{t('landing.hero.purchase.title')}</h2>
                    <div className="converter__inner">
                        <div className="converter__item-title">{t('landing.hero.purchase.buy')}</div>
                        <div className="converter__item">
                            <input
                                className="converter__input"
                                type="number"
                                value={to}
                                placeholder="0,00"
                                onChange={handleChangeTo}
                                disabled={!isLoading}
                            />
                            <div className="converter__coin">
                                <div className="converter__coin-name">
                                    <SelectCore
                                        values={coins}
                                        selected={toCurrency}
                                        onChange={handleChangeСurrencyForTo}
                                        isDisabled={!isLoading}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="converter__item-title">
                            {t('landing.hero.purchase.for')}
                        </div>
                        <div className="converter__item">
                            <input
                                className="converter__input"
                                value={from}
                                type="number"
                                placeholder="0,00"
                                onChange={handleChangeFrom}
                                disabled={!isLoading}
                            />
                            <div className="converter__coin">
                                <div className="converter__coin-name">
                                    <SelectCore
                                        values={currency}
                                        selected={fromCurrency}
                                        onChange={handleChangeСurrencyForFrom}
                                        isDisabled={!isLoading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="purchase__payment-method payment-method">
                    {
                        paymentMethods.map((item) => (
                            <div
                                className={"payment-method__item" + (item.key === paymentMethod ? ' payment-method__item--active' : '')}
                                onClick={handleChangePaymentMethod}
                                data-key={item.key}
                                key={item.key}
                            >
                                <img
                                    className="filter--gray"
                                    src={item.image}
                                    width="66"
                                    height="25"
                                    data-key={item.key}
                                    alt={item.key} />
                            </div>
                        ))
                    }
                </div>
                <button className="purchase__btn btn btn--blue" onClick={createModal.toggleModal}>
                    {t('landing.hero.purchase.buy-item', { item: toCurrency.label })}
                </button>
            </div>
        </div>
    )
}

export default HeroPurchase;