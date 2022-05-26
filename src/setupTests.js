// import '@testing-library/jest-dom';



//Configuracion para trabajar con Enzyme y Reac 17

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configuracion de enzyme to json
import { createSerializer } from 'enzyme-to-json';


Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );