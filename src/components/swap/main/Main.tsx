import { FC } from 'react'
import { useTranslation } from 'react-i18next';
import Topbar from './topbar/Topbar';

interface MainProps {

}

const Main: FC<MainProps> = () => {
    const { t } = useTranslation();

    return (
        <main className="page-main">
            <section className="swap">
                <Topbar /> 

                <div className="swap__content">
                    <div className="swap__content-col">
                        <form className="swap__form">
                            <div className="swap__content-title">{ t('swap.currency-conversion') }</div>
                            <div className="form__group modal__form-group">
                                <div className="swap__form-text-inner">
                                    <div className="swap__form-text">Convert</div>
                                    <div className="swap__form-text">Available:<span>-- BTC</span></div>
                                </div>
                                <div className="swap__form-input-wrap">
                                    <div className="swap__form__select-convert">
                                        <select id="selectbox-convert">
                                            <option data-img="./img/icons/usd-icon.svg" value="1" selected>BTC</option>
                                            <option data-img="./img/icons/btc-icon.svg" value="2">ETH1234567890</option>
                                            <option data-img="./img/icons/usd-icon.svg" value="3">ETH</option>
                                            <option data-img="./img/icons/btc-icon.svg" value="4">BTC</option>
                                        </select>
                                    </div>
                                    <div className="swap__form__input-convert">
                                        <input 
                                            className="swap__form-input" 
                                            type="text" 
                                            id="password-1" 
                                            placeholder="Enter amount" 
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>
                                <div className="swap__form-text">To</div>
                                <select id="selectbox-convert-to">
                                    <option data-img="./img/icons/usd-icon.svg" value="1">BTC</option>
                                    <option data-img="./img/icons/eth-icon.svg" value="2" selected>ETH</option>
                                    <option data-img="./img/icons/usd-icon.svg" value="3">ETH</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC11</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC22</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC33</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC44</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC44</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC44</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">BTC44</option>
                                    <option data-img="./img/icons/btc-icon.svg" value="4">end</option>
                                </select>
                                <button className="swap__form-submit-btn btn btn-green" type="submit">Swap</button>
                            </div>
                        </form>
                    </div>
                    <div className="swap__content-col swap__content-col--picture">
                        <div className="swap__content-wrap">
                            <div className="swap__content-picture">
                                <img className="swap__content-img" src="../img/swap.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;