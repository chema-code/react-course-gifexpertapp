
import { getGifs } from '../../helpers/getGifs';

describe('getGifs Pruebas', () =>{

    test('Debe obtener 10 elementos', async() => {
        
        const gifs = await getGifs('Naruto');

        expect(gifs.length).toBe( 10 );
    });

    test('Debe obtener 10 elementos', async() => {
        
        const gifs = await getGifs('');

        expect(gifs).toEqual( [] );
    })
    

});