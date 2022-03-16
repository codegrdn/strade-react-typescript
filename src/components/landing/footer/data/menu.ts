interface ILink {
    id: string,
    title: string,
    Link?: string 
}

interface IItemFooter {
    id: string,
    title: string,
    links: ILink[]
}

export const menu: IItemFooter[] = [
    {
        id: 'info',
        title: 'landing.footer.info.title',
        links: [
            {
                id: 'about-us',
                title: 'landing.footer.info.list.about-us'
            },
            {
                id: 'fees',
                title: 'landing.footer.info.list.fees'
            },
            {
                id: 'token-listing',
                title: 'landing.footer.info.list.token-listing'
            },
            { 
                id: 'strade-blog',
                title: 'landing.footer.info.list.strade-blog'
            },
        ]
    },
    {
        id: 'legal',
        title: 'landing.footer.legal.title',
        links: [
            {
                id: 'terms-of-use',
                title: 'landing.footer.legal.list.terms-of-use'
            },
            {
                id: 'privacy-policy',
                title: 'landing.footer.legal.list.privacy-policy'
            },
            {
                id: 'trading-rules',
                title: 'landing.footer.legal.list.trading-rules'
            },
            {
                id: 'aml-policy',
                title: 'landing.footer.legal.list.aml-policy'
            },
        ]
    },
    {
        id: 'service',
        title: 'landing.footer.service.title',
        links: [
            {
                id: 'exchange',
                title: 'landing.footer.service.list.exchange'
            },
            {
                id: 'wallet',
                title: 'landing.footer.service.list.wallet'
            },
            {
                id: 'but-crypto',
                title: 'landing.footer.service.list.but-crypto'
            },
            {
                id: 'swap',
                title: 'landing.footer.service.list.swap'
            },
        ]
    },
    {
        id: 'support',
        title: 'landing.footer.support.title',
        links: [
            {
                id: 'faq',
                title: 'landing.footer.support.list.faq'
            },
            {
                id: 'help-center',
                title: 'landing.footer.support.list.help-center'
            },
            {
                id: 'verification',
                title: 'landing.footer.support.list.verification'
            },
            {
                id: 'api-documentation',
                title: 'landing.footer.support.list.api-documentation'
            },
        ]
    },
]