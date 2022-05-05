import Landing from "../components/landing/Landing";
import Markets from "../components/markets/Markets";
import Swap from "../components/swap/Swap";
import { FC } from "react";
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
        component: Landing,
        reload: false,
    },
    {
        path: "/swap",
        title: "Swap",
        component: Swap,
        reload: false,
    },
    {
        path: "/markets",
        title: "Markets",
        component: Markets,
        reload: true,
    },
    {
        path: "*",
        title: "NotFound",
        component: NotFound,
        reload: false,
    }
];

export const notShowMenu = [
    "Home",
    "NotFound",
];