import React from "react";
import { initializeApp } from "firebase/app";

interface IMobileMenu {
    menuMobile: boolean,
    toggleMenuMobile: () => void
}

interface IMarketsContext {
    menuMobile: IMobileMenu
}

export const marketsState: IMarketsContext = {
    menuMobile: {
        menuMobile: false,
        toggleMenuMobile: () => {}
    }
}

export const MarketsContext = React.createContext<IMarketsContext>(marketsState);