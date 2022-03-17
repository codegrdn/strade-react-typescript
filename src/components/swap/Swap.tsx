import { FC } from 'react';
import HeaderAdmin from '../shared/header/admin/HeaderAdmin';
import Main from './main/Main';
import '../../assets/css/swap-style.min.css';

interface PropsSwap {};

const Swap: FC<PropsSwap> = () => {
    return (
        <div className="page theme">
            <div className="page__body dashboard">
                <HeaderAdmin />
                <Main />
            </div>
        </div>
    )
}

export default Swap;
