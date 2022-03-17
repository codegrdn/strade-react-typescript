import React from "react";

interface IModalCreate {
    show: boolean,
    togleModals: () => void
}

interface ILandingContext {
    createModal: IModalCreate,
}

export const landingState: ILandingContext = {
    createModal: {
        show: false,
        togleModals: () => {}
    }
}

export const LandingContext = React.createContext<ILandingContext>(landingState);