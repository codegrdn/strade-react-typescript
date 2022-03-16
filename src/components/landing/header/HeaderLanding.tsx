import { FC } from 'react';
import Logo from './logo/HeaderLogo';
import HeaderLandingNav from './nav/HeaderLandingNav';

interface HeaderLandingProps {

}

const HeaderLanding: FC<HeaderLandingProps> = () => {
    return (
        <header className="page-header header">
            <div className="box">
                <div className="header__content">
                    <Logo />
                
                    <div className="header__nav">
                        <HeaderLandingNav />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderLanding;