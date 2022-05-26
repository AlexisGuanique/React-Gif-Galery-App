import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem />', () => {

    // Variables globales dentro de la prueba
    const title = 'Titulo';
    const url = 'https://holamundo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> ) 



    test('Debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe tener un parrafo con el titulo', () => {

        const p = wrapper.find( 'p' );

        expect( p.text().trim() ).toBe( title );
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find( 'img' );

        expect( img.prop( 'src' )).toBe( url );
        expect( img.prop( 'alt' )).toBe( title );
    });

    test('Debe de tener la clase animate__fadeIn', () => {

        const div = wrapper.find( 'div' );
        // Manera larga de hacerlo
        // expect( div.prop('className')).toBe( 'card animate__animated animate__fadeIn' );

        // Manera corta y mas eficiente

        // La palabra reservada includes me ayuda a consultar si ese string incluye una palabra u oracion en especifico
        const className = div.prop('className');
        expect( className.includes( 'animate__fadeIn') ).toBe( true );

    })


 

})


