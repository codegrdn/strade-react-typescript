import augurDesktopJpg from '../images/augur-desktop.jpg';
import augurDesktop2xJpg from '../images/augur-desktop@2x.jpg';
import augurDesktopWebp from '../images/augur-desktop.webp';
import augurDesktop2xWebp from '../images/augur-desktop@2x.webp';

import augurTabletJpg from '../images/augur-tablet.jpg';
import augurTablet2xJpg from '../images/augur-tablet@2x.jpg';
import augurTabletWebp from '../images/augur-tablet.webp';
import augurTablet2xWebp from '../images/augur-tablet@2x.webp';

import augurMobileJpg from '../images/augur-mobile.jpg';
import augurMobile2xJpg from '../images/augur-mobile@2x.jpg';
import augurMobileWebp from '../images/augur-mobile.webp';
import augurMobile2xWebp from '../images/augur-mobile@2x.webp';

import filecoinDesktopJpg from '../images/filecoin-desktop.jpg';
import filecoinDesktop2xJpg from '../images/filecoin-desktop@2x.jpg';
import filecoinDesktopWebp from '../images/filecoin-desktop.webp';
import filecoinDesktop2xWebp from '../images/filecoin-desktop@2x.webp';

import filecoinTabletJpg from '../images/filecoin-tablet.jpg';
import filecoinTablet2xJpg from '../images/filecoin-tablet@2x.jpg';
import filecoinTabletWebp from '../images/filecoin-tablet.webp';
import filecoinTablet2xWebp from '../images/filecoin-tablet@2x.webp';

import filecoinMobileJpg from '../images/filecoin-mobile.jpg';
import filecoinMobile2xJpg from '../images/filecoin-mobile@2x.jpg';
import filecoinMobileWebp from '../images/filecoin-mobile.webp';
import filecoinMobile2xWebp from '../images/filecoin-mobile@2x.webp';

import maticDesktopJpg from '../images/matic-desktop.jpg';
import maticDesktop2xJpg from '../images/matic-desktop@2x.jpg';
import maticDesktopWebp from '../images/matic-desktop.webp';
import maticDesktop2xWebp from '../images/matic-desktop@2x.webp';

import maticTabletJpg from '../images/matic-tablet.jpg';
import maticTablet2xJpg from '../images/matic-tablet@2x.jpg';
import maticTabletWebp from '../images/matic-tablet.webp';
import maticTablet2xWebp from '../images/matic-tablet@2x.webp';

import maticMobileJpg from '../images/matic-mobile.jpg';
import maticMobile2xJpg from '../images/matic-mobile@2x.jpg';
import maticMobileWebp from '../images/matic-mobile.webp';
import maticMobile2xWebp from '../images/matic-mobile@2x.webp';

interface IImages {
    desktopJpg: string,
    desktop2xJpg: string,
    desktopWebp: string,
    desktop2xWebp: string,

    tabletJpg: string,
    tablet2xJpg: string,
    tabletWebp: string,
    tablet2xWebp: string,

    mobileJpg: string,
    mobile2xJpg: string,
    mobileWebp: string,
    mobile2xWebp: string,
}

interface IArticale {
    id: string,
    date: string,
    title: string,
    description: string,
    images: IImages
}

export const articales: IArticale[] = [
    {
        id: "augur",
        date: '2022-02-22',
        title: "landing.news.atricales.augur.title",
        description: "landing.news.atricales.augur.description",
        images: {
            desktopJpg: augurDesktopJpg,
            desktop2xJpg: augurDesktop2xJpg,
            desktopWebp: augurDesktopWebp,
            desktop2xWebp: augurDesktop2xWebp,

            tabletJpg: augurTabletJpg,
            tablet2xJpg: augurTablet2xJpg,
            tabletWebp: augurTabletWebp,
            tablet2xWebp: augurTablet2xWebp,

            mobileJpg: augurMobileJpg,
            mobile2xJpg: augurMobile2xJpg,
            mobileWebp: augurMobileWebp,
            mobile2xWebp: augurMobile2xWebp,
        }
    },
    {
        id: "filecoin",
        date: '2022-02-23',
        title: "landing.news.atricales.filecoin.title",
        description: "landing.news.atricales.filecoin.description",
        images: {
            desktopJpg: filecoinDesktopJpg,
            desktop2xJpg: filecoinDesktop2xJpg,
            desktopWebp: filecoinDesktopWebp,
            desktop2xWebp: filecoinDesktop2xWebp,

            tabletJpg: filecoinTabletJpg,
            tablet2xJpg: filecoinTablet2xJpg,
            tabletWebp: filecoinTabletWebp,
            tablet2xWebp: filecoinTablet2xWebp,

            mobileJpg: filecoinMobileJpg,
            mobile2xJpg: filecoinMobile2xJpg,
            mobileWebp: filecoinMobileWebp,
            mobile2xWebp: filecoinMobile2xWebp,
        }
    },
    {
        id: "matic",
        date: '2022-02-24',
        title: "landing.news.atricales.matic.title",
        description: "landing.news.atricales.matic.description",
        images: {
            desktopJpg: maticDesktopJpg,
            desktop2xJpg: maticDesktop2xJpg,
            desktopWebp: maticDesktopWebp,
            desktop2xWebp: maticDesktop2xWebp,

            tabletJpg: maticTabletJpg,
            tablet2xJpg: maticTablet2xJpg,
            tabletWebp: maticTabletWebp,
            tablet2xWebp: maticTablet2xWebp,

            mobileJpg: maticMobileJpg,
            mobile2xJpg: maticMobile2xJpg,
            mobileWebp: maticMobileWebp,
            mobile2xWebp: maticMobile2xWebp,
        }
    }
]