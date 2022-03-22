import { FC } from 'react';
import HeroContent from './content/HeroContent';
import HeroFeatures from './features/HeroFeatures';
import HeroPurchase from './purchase/HeroPurchase';

interface HeroProps {

}

const Hero: FC<HeroProps> = () => {
    return (
        <section className="hero">
            <div className="box">
                <div className="hero__inner">
                    <HeroContent />
                    <HeroPurchase />
                    <HeroFeatures />
                </div>
            </div>
        </section>
    )
}

export default Hero;