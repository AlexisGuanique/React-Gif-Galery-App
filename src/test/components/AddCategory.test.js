import React from "react";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    // Con el jest.fn() podemos saber cuando fue llamada, como fue llamada, etc, esta funcion setCategories
    const setCategories = jest.fn() ;
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );


    // Esta funcion nos ayuda a reuniciar algun valor
    beforeEach(()=>{
        // clearAllMocks sirve para realizar una limpieza de algo
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    })

    test('Debe de mostrarse cottectamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('No debe de postear la informacion con submit',() => {

        // Le enviamos el preventDefault como argumento al simulate
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo'
        

        // 1. simular el inputChance

        wrapper.find('input').simulate('change', { target: { value }});


        // 2. simular el submit

        wrapper.find('form').simulate('submit', { preventDefault(){}} );
        
        
        // 3. setCategories se debe de haber llamado

        expect( setCategories ).toHaveBeenCalled();

        
        // 4. el valor del input debe de estar ''

        expect( wrapper.find('input').prop( 'value' ) ).toBe( '' );
    })


})