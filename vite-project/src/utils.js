// returns the path we give it for our images as url
export const getImageURL = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}
