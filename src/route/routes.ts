import Landing from "../components/landing/Landing";
import Markets from "../components/markets/Markets";
import Swap from "../components/swap/Swap";
import React, { FC } from "react";
import NotFound from "../components/not-found/NotFound";

interface CustomRoute {
    path: string,
    title: string,
    component: FC,
    reload: boolean,
}

export const routes: CustomRoute[] = [
    {
        path: "/",
        title: "Home",
        component: React.lazy(() => import('../components/landing/Landing')),
        reload: false,
    },
    {
        path: "/swap",
        title: "Swap",
        component: React.lazy(() => import('../components/swap/Swap')),
        reload: false,
    },
    {
        path: "/markets",
        title: "Markets",
        component: React.lazy(() => import('../components/markets/Markets')),
        reload: true,
    },
    {
        path: "*",
        title: "NotFound",
        component: React.lazy(() => import('../components/not-found/NotFound')),
        reload: false,
    }
];

export const notShowMenu = [
    "Home",
    "NotFound",
];