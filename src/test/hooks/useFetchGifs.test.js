import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball Z' ) );

        const { data, loading } = result.current;

        // console.log(data, loading);

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);  
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {

        // waitForNextUpdate es una funcion que nos avisa cuando se realiza un cambio en nuestro custom Hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Dragon Ball Z' ) );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        // console.log(data, loading);

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);

    })
});


// Configuraciones adicionales si se trabaja con una version distinta de testing-library


// 1.
// Primero instalamos la version adecuada de testing library
// npm install @testing-library/react@12.1.2


// 2.
// Segundo instalamos la libreria react-hooks para poder testear los hooks
// npm install --save-dev @testing-library/react-hooks

