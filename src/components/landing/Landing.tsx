import { FC } from 'react';
import FooterLanding from './footer/FooterLanding';
import HeaderLanding from './header/HeaderLanding';
import MainLanding from './main/MainLanding';
import '../../assets/css/index-style.min.css';

interface LandingProps {
    
}

const Landing: FC<LandingProps> = () => {
    return (
        <div className="page">
            <div className="page__body">
                <HeaderLanding />

                <MainLanding />

                <FooterLanding />
            </div>
        </div>
    );
}

export default Landing;
