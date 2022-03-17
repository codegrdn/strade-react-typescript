import { FC } from 'react';

interface BarMarketProps {
    title: string,
}

const BarMarket: FC<BarMarketProps> = ({ title }) => {
    return (
        <div className="markets__topbar">
            <h1 className="markets__topbar-title">{title}</h1>
        </div>
    )
}

export default BarMarket;