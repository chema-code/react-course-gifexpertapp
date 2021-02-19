import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {createSerializer} from 'enzyme-to-json';
//import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

//instalar enzyme
//instalar adaptador de enzyme to react-17
//instalar enyme-to-json
//instalar react-hooks para probar hooks

/*
npm install enzyme --save
npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17
npm install --save-dev enzyme-to-json
npm install --save-dev @testing-library/react-hooks
*/
