import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Topbar from './topbar/Topbar';
import imageSvg from './image/swap.svg';
import { coins, selectedCoin } from './data/coins';
import SelectCore from '../../shared/select/core/SelectCore';

interface MainProps {

}

const Main: FC<MainProps> = () => {
    const { t } = useTranslation();
    const [coin, setCoin] = useState('BTC');
    const [value, setValue] = useState('');

    const [toCoin, setToCoin] = useState(coins[0]);
    const [forCoin, setForCoin] = useState(coins[1]);

    function handlerValue(e: any) {
        setValue(e.target.value);
    }

    function handlerSelectFor(e: any) {
        setCoin(e.label);
        setForCoin(e);
    }

    function handlerSelectTo(e: any) {
        setToCoin(e);
    }

    return (
        <main className="page-main">
            <section className="swap">
                <Topbar /> 

                <div className="swap__content">
                    <div className="swap__content-col">
                        <form className="swap__form" onSubmit={(e) => { e.preventDefault() }}>
                            <div className="swap__content-title">{ t('swap.currency-conversion') }</div>
                            <div className="form__group modal__form-group">
                                <div className="swap__form-text-inner">
                                    <div className="swap__form-text">{ t('swap.convert') }</div>
                                    <div className="swap__form-text">{ t('swap.available') }:<span>-- {coin}</span></div>
                                </div>
                                <div className="swap__form-input-wrap">
                                    <div>
                                        <SelectCore values={coins} selected={forCoin} onChange={handlerSelectFor} />
                                    </div>
                                    <div className="swap__form__input-convert">
                                        <input 
                                            className="swap__form-input" 
                                            type="text"
                                            value={value}
                                            placeholder={ t('swap.enter-amount') }
                                            onChange={handlerValue}
                                        />
                                    </div>
                                </div>
                                <div className="swap__form-text">{ t('swap.to') }</div>

                                <SelectCore values={coins} selected={toCoin} onChange={handlerSelectTo} />
                                <button className="swap__form-submit-btn btn btn-green" type="button">{ t('swap.swap') }</button>
                            </div>
                        </form>
                    </div>
                    <div className="swap__content-col swap__content-col--picture">
                        <div className="swap__content-wrap">
                            <div className="swap__content-picture">
                                <img className="swap__content-img" src={imageSvg} alt="swap" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;