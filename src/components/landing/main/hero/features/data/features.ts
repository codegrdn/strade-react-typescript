import wallet from "../images/wallet-icon.svg";
import swap from '../images/swap-icon.svg';
import dex from '../images/dex-icon.svg';
import build from '../images/build-icon.svg';

export interface IFeatures {
    id: string,
    image: string,
    title: string,
    desciption: string
}

export const features: IFeatures[] = [
    {
        id: 'wallet',
        image: wallet,
        title: 'landing.hero.features.wallet.title',
        desciption: 'landing.hero.features.wallet.description',
    },
    {
        id: 'swap',
        image: swap,
        title: 'landing.hero.features.swap.title',
        desciption: 'landing.hero.features.swap.description',
    },
    {
        id: 'dex',
        image: dex,
        title: 'landing.hero.features.dex.title',
        desciption: 'landing.hero.features.dex.description',
    },
    {
        id: 'license',
        image: build,
        title: 'landing.hero.features.license.title',
        desciption: 'landing.hero.features.license.description',
    },
]