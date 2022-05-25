import { FC, useState } from 'react';
import HeaderAdmin from './header/header/HeaderAdmin';
import Main from './main/Main';
import '../../assets/css/swap-style.min.css';
import CreateModal from './create/CreateModal';
import { SwapContext } from './context/SwapContext';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

interface PropsSwap {};

const Swap: FC<PropsSwap> = () => {
    const { t } = useTranslation();
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ t('swap.meta.title') }</title>
                <meta
                    name="description"
                    content={ t('swap.meta.description') }
                    />
            </Helmet>

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
