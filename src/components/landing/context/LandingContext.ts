import React from "react";

interface IModalCreate {
    show: boolean,
    toggleModal: () => void
}

interface IMobileMenu {
    menuMobile: boolean,
    toggleMenuMobile: () => void
}

interface ILandingContext {
    createModal: IModalCreate,
    menuMobile: IMobileMenu,
}

export const landingState: ILandingContext = {
    createModal: {
        show: false,
        toggleModal: () => {}
    },
    menuMobile: {
        menuMobile: false,
        toggleMenuMobile: () => {}
    }
}

export const LandingContext = React.createContext<ILandingContext>(landingState);