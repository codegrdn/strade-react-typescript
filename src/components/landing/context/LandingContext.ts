import React from "react";

interface IModal {
    show: boolean,
    toggleModal: () => void
}

interface IMobileMenu {
    menuMobile: boolean,
    toggleMenuMobile: () => void
}

interface ILandingContext {
    createModal: IModal,
    loginModal: IModal,
    menuMobile: IMobileMenu,
}

export const landingState: ILandingContext = {
    createModal: {
        show: false,
        toggleModal: () => {}
    },
    loginModal: {
        show: false,
        toggleModal: () => {}
    },
    menuMobile: {
        menuMobile: false,
        toggleMenuMobile: () => {}
    }
}

export const LandingContext = React.createContext<ILandingContext>(landingState);