import { FC, useState } from 'react';
import HeaderAdmin from './header/header/HeaderAdmin';
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

    const [menuMobile, setMenuMobile] = useState(false);
    const toggleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    }

    return (
        <SwapContext.Provider value={{
            createModal: {
                show: createModal,
                toggleModal: toggleCreateModal
            },
            menuMobile: {
                menuMobile: menuMobile,
                toggleMenuMobile: toggleMenuMobile
            }
        }} >
            <div className="page theme">
                <div className={"page__body dashboard" + ( createModal || menuMobile ? " no-scroll" : "" )}>
                    <HeaderAdmin />
                    <Main />
                    <CreateModal />
                </div>
            </div>
        </SwapContext.Provider>
    )
}

export default Swap;
