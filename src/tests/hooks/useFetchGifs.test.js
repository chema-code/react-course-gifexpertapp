import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('useFetchGifs Pruebas', () => {

    test('debe devolver el estado inicial ', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( 
                                                () => useFetchGifs('Naruto'));
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

    });

    test('debe de devolver un array de imagenes y loading false', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( 
                                                () => useFetchGifs('Naruto'));

        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBeFalsy();

    });
    
    


});