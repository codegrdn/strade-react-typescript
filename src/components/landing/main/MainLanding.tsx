import { FC } from 'react'
import Hero from './hero/Hero';
import MarketsInfo from './markets-info/MarketsInfo';
import News from './news/News';
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
            {/* <News /> */}
        </main>
    )
}

export default MainLanding;