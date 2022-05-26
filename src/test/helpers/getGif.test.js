import { getGifs } from "../../helpers/getGifs"

describe('Prueba con getGif Fecth', () => {

    test('Debe de tener 10 elementos', async() => {

        const gifs = await getGifs('Dragon Ball Z');

        // console.log( gifs );

        expect( gifs.length ).toBe( 10 );
    });

    test('Debe retornar error si no se envia la categoria', async() => {

        const gifs = await getGifs('');

        console.log( gifs );

        expect( gifs.length ).toBe( 0 );
    })
})