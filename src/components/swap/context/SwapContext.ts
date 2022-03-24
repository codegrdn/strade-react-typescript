import React from "react";

interface IModalCreate {
    show: boolean,
    toggleModal: () => void
}

interface IMobileMenu {
    menuMobile: boolean,
    toggleMenuMobile: () => void
}

interface ISwapContext {
    createModal: IModalCreate,
    menuMobile: IMobileMenu,
}

export const swapState: ISwapContext = {
    createModal: {
        show: false,
        toggleModal: () => {}
    },
    menuMobile: {
        menuMobile: false,
        toggleMenuMobile: () => {}
    }
}

export const SwapContext = React.createContext<ISwapContext>(swapState);