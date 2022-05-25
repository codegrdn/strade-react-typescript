import { FC, useState } from 'react';
import FooterLanding from './footer/FooterLanding';
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './main/MainLanding';
import '../../assets/css/index-style.min.css';
import { LandingContext } from './context/LandingContext';
import CreateModal from './modals/create/CreateModal';
import useModal from './hooks/useModal';
import LoginModal from './modals/login/LoginModal';
import LazyLoad from 'react-lazyload';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

interface LandingProps {
    
}

const Landing: FC<LandingProps> = () => {
    const { t } = useTranslation();
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ t('landing.meta.title') }</title>
                <meta
                    name="description"
                    content={ t('landing.meta.description') }
                    />
            </Helmet>

            <div className="page">
                <div className={"page__body" + ( createShowModal || loginShowModal || menuMobile ? " no-scroll" : "" )}>
                    <HeaderLanding />
                    <MainLanding />
                    
                    <LazyLoad height={200}>
                        <FooterLanding />
                    </LazyLoad>

                    <CreateModal />
                    <LoginModal />
                </div>
            </div>
        </LandingContext.Provider>
    );
}

export default Landing;
