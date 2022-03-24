import { FC, useState } from 'react';
import FooterLanding from './footer/FooterLanding';
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './main/MainLanding';
import '../../assets/css/index-style.min.css';
import { LandingContext } from './context/LandingContext';
import CreateModal from './modals/create/CreateModal';

interface LandingProps {
    
}

const Landing: FC<LandingProps> = () => {
    const [createModal, setCreateModal] = useState(false);
    const toggleCreateModal = () => {
        setCreateModal(!createModal);
    }

    const [menuMobile, setMenuMobile] = useState(false);
    const toggleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    }

    return (
        <LandingContext.Provider value={{
            createModal: {
                show: createModal,
                toggleModal: toggleCreateModal
            },
            menuMobile: {
                menuMobile: menuMobile,
                toggleMenuMobile: toggleMenuMobile
            }
        }} >
            <div className="page">
                <div className={"page__body" + ( createModal || menuMobile ? " no-scroll" : "" )}>
                        <HeaderLanding />
                        <MainLanding />
                        <FooterLanding />
                        <CreateModal />
                </div>
            </div>
        </LandingContext.Provider>
    );
}

export default Landing;
