
export const getGifs = async(category ) => {

    const giphyEndPoint =`https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=vYDLYtMBdjOuYMaXRLx56YoHvYDom8RB`;
    const apiKey = 'vYDLYtMBdjOuYMaXRLx56YoHvYDom8RB';
    const resp = await fetch(giphyEndPoint);
    const {data} = await resp.json();
    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    
    return gifs;
}