import Landing from "../components/landing/Landing";
import Markets from "../components/markets/Markets";
import Swap from "../components/swap/Swap";
import { FC } from "react";

interface CustomRoute {
    path: string,
    title: string,
    component: FC
}

let routes: CustomRoute[] = [
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
    }
];

export default routes;