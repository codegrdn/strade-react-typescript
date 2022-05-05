import { useLanguage } from "./language";

export const isActiveURL: (url: string, currentUrl: string) => boolean = (url: string, currentUrl: string) => {
    
    console.log(url);
    console.log(url == currentUrl);
    
    return url == currentUrl;
}