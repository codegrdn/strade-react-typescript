import { FC, useState } from 'react';
import FooterLanding from './footer/FooterLanding';
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './main/MainLanding';
import '../../assets/css/index-style.min.css';
import { LandingContext } from './context/LandingContext';
import CreateModal from './modals/create/CreateModal';
import useModal from './hooks/useModal';
import LoginModal from './modals/login/LoginModal';

interface LandingProps {
    
}

const Landing: FC<LandingProps> = () => {
    const { showModal: loginShowModal, toggleShowModal: toggleLoginShowModal  } = useModal();
    const { showModal: createShowModal, toggleShowModal: toggleCreateShowModal  } = useModal();

    const [menuMobile, setMenuMobile] = useState(false);
    const toggleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    }

    return (
        <LandingContext.Provider value={{
            createModal: {
                show: createShowModal,
                toggleModal: toggleCreateShowModal
            },
            loginModal: {
                show: loginShowModal,
                toggleModal: toggleLoginShowModal
            },
            menuMobile: {
                menuMobile: menuMobile,
                toggleMenuMobile: toggleMenuMobile
            }
        }} >
            <div className="page">
                <div className={"page__body" + ( createShowModal || loginShowModal || menuMobile ? " no-scroll" : "" )}>
                    <HeaderLanding />
                    <MainLanding />
                    <FooterLanding />
                    <CreateModal />
                    <LoginModal />
                </div>
            </div>
        </LandingContext.Provider>
    );
}

export default Landing;
