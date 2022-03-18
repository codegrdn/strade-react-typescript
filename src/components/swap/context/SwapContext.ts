import React from "react";

interface IModalCreate {
    show: boolean,
    togleModals: () => void
}

interface ISwapContext {
    createModal: IModalCreate,
}

export const landingState: ISwapContext = {
    createModal: {
        show: false,
        togleModals: () => {}
    }
}

export const SwapContext = React.createContext<ISwapContext>(landingState);