import { getStrapiUrl } from "./api"; 

export function getStrapiMedia(media) {
    const imageUrl = media.url.startsWith("/") ? getStrapiMedia(media.url) : media.url;
    return imageUrl; //recognise if the media is an internal or external file, by sorting between /user/media and https://. Append strapi if internal, dont append if external. 
}