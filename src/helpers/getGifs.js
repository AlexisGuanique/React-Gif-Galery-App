// Creamos una funcion que reciba la categoria y haga la consulta HTTP

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category ) }&limit=10&api_key=Gcbrzq3XBVLeyENzX41e0udRoNx3AuLt`

    const resp = await fetch( url );
    
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}