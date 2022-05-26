import React from "react";
import '@testing-library/jest-dom';

import { GifGrid } from "../../components/GifGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Con jest.mock vamos a simular la llamada a cualquier archivo y finjir que tensmoa la informacion necesaria
jest.mock('../../hooks/useFetchGifs')



describe('Pruebas en componente <GifGrid />', () =>{

    // Falsa implementacion del useFetchGifs
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });

    // Variables globales
    const category = 'Dragon Ball Z'
    const wrapper = shallow( <GifGrid category={ category } />)
   


    test('Debe mostrar el componente <GifGrid /> correctamente', () => {
        
        // console.log(wrapper.html() )
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        // Dibujemos el gifs que deberiamos tener
        const gifs = [{
            id: '123',
            url: 'https://localhost/tumama/enpantaletas.jp',
            title: 'La Vieja PEYA'
        },{
            id: '123',
            url: 'https://localhost/tumama/enpantaletas.jp',
            title: 'La Vieja PEYA'
        }];

        ////////////////////////////////////////////////////////////////////////////////////////
        // Vamos a simular que cuando nuestro componente llame al useFetchGifs tenga cierta data

        // obviamente utilizando la variable gifs que dibujamos arriba, ahre
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        // Llamamos de nuevo al componente para dibujarlo, porque la imagen globan del mismo es de su estado inicial
        const wrapper = shallow( <GifGrid category={ category } />)  
        expect( wrapper ).toMatchSnapshot();

        // Ahora vamos a evaluar que el parrafo donde dice loading no exista, porque obviamente tenemos una imagen 
        expect( wrapper.find('p').exists() ).toBe( false );


        // Ahora vamos a evaluar que exista la llamada del gif a travez del componente GifGridItem
        // Cuantos gifs sean necesarios, por eso gifs.length
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );


    })
})