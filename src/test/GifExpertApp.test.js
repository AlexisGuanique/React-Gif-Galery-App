import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas con el componente <GifExpertApp />', () => {

    const wrapper = shallow(<GifExpertApp />)   

    test('Debe mostrar el componente <GifExpertApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
        
    });

    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['Dragon Ball Z', 'Samurai X'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length);
    });

});