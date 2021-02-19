import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid /> Pruebas', () => {

    const category = 'Naruto';

    test('Se muestra correctamente ', () => {
       
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow( <GifGrid category = {category}/> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar items cuando descarga imagenes useFetchGifs ', () => {
       
        const images = [{
            id:'ABCD',
            url:'https://localhost/imagen.png',
            title:'ImagenMock01'
        }
        ,{
            id:'ABCD2',
            url:'https://localhost/imagen2.png',
            title:'ImagenMock02'
        }];

        useFetchGifs.mockReturnValue({
            data: images,
            loading: false,
        });

        const wrapper = shallow( <GifGrid category = {category}/> );
        
        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);        
        expect( wrapper.find('GifGridItem').length).toBe(images.length);
        

    });
    
    

});