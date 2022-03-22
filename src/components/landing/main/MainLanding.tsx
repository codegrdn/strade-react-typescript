import { FC } from 'react'
import Hero from './hero/Hero';
import MarketsInfo from './markets-info/MarketsInfo';
import Privileges from './privileges/Privileges';
import TradeInfo from './trade-info/TradeInfo';

interface MainLandingProps {

}

const MainLanding: FC<MainLandingProps> = () => {
    return (
        <main className="page-main">
            <Hero />
            <MarketsInfo />
            <TradeInfo />
            <Privileges />
        </main>
    )
}

export default MainLanding;