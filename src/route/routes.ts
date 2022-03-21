import Landing from "../components/landing/Landing";
import Markets from "../components/markets/Markets";
import Swap from "../components/swap/Swap";
import { FC } from "react";
import NotFound from "../components/not-found/NotFound";

interface CustomRoute {
    path: string,
    title: string,
    component: FC
}

export const routes: CustomRoute[] = [
    {
        path: "/",
        title: "Home",
        component: Landing,
    },
    {
        path: "/swap",
        title: "Swap",
        component: Swap,
    },
    {
        path: "/markets",
        title: "Markets",
        component: Markets,
    },
    {
        path: "*",
        title: "NotFound",
        component: NotFound,
    }
];

export const notShowMenu = [
    "Home",
    "NotFound",
];