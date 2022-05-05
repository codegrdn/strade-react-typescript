export const isActiveURL: (url: string, currentUrl: string) => boolean = (url: string, currentUrl: string) => {
    return url == currentUrl;
}