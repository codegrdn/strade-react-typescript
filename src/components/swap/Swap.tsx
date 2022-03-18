import { FC, useState } from 'react';
import HeaderAdmin from '../shared/header/admin/HeaderAdmin';
import Main from './main/Main';
import '../../assets/css/swap-style.min.css';
import CreateModal from './create/CreateModal';
import { SwapContext } from './context/SwapContext';

interface PropsSwap {};

const Swap: FC<PropsSwap> = () => {
    const [createModal, setCreateModal] = useState(false);
    const toggleCreateModal = () => {
        setCreateModal(!createModal);
    }

    return (
        <SwapContext.Provider value={{
            createModal: {
                show: createModal,
                togleModals: toggleCreateModal
            }
        }} >
            <div className="page theme">
                <div className={"page__body dashboard" + ( createModal ? " no-scroll" : "" )}>
                    <HeaderAdmin />
                    <Main />
                    <CreateModal />
                </div>
            </div>
        </SwapContext.Provider>
    )
}

export default Swap;
