import security from '../images/security.webp';
import deposit from '../images/deposit.webp';
import support from '../images/support.webp';
import liquid from '../images/liquid.webp';

export interface IPrivilege {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    description: string,
}

export const privileges: IPrivilege[] = [
    {
        id: "security",
        image: security,
        title: "landing.privileges.list.security.title",
        subtitle: "landing.privileges.list.security.subtitle",
        description: "landing.privileges.list.security.description"
    },
    {
        id: "deposit",
        image: deposit,
        title: "landing.privileges.list.deposit.title",
        subtitle: "landing.privileges.list.deposit.subtitle",
        description: "landing.privileges.list.deposit.description"
    },
    {
        id: "liquid",
        image: liquid,
        title: "landing.privileges.list.liquid.title",
        subtitle: "landing.privileges.list.liquid.subtitle",
        description: "landing.privileges.list.liquid.description"
    },
    {
        id: "support",
        image: support,
        title: "landing.privileges.list.support.title",
        subtitle: "landing.privileges.list.support.subtitle",
        description: "landing.privileges.list.support.description"
    },
]