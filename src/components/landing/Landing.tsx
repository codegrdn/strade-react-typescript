import { FC, useState } from 'react';
import FooterLanding from './footer/FooterLanding';
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './main/MainLanding';
import '../../assets/css/index-style.min.css';
import { LandingContext, landingState } from './context/LandingContext';
import CreateModal from './modals/create/CreateModal';

interface LandingProps {
    
}

const Landing: FC<LandingProps> = () => {
    const [createModal, setCreateModal] = useState(false);
    const toggleCreateModal = () => {
        setCreateModal(!createModal);
    }


    return (
        <LandingContext.Provider value={{
            createModal: {
                show: createModal,
                togleModals: toggleCreateModal
            }
        }} >
            <div className="page">
                <div className={"page__body" + ( createModal ? " no-scroll" : "" )}>
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
