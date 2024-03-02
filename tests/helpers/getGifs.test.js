/* eslint-disable no-undef */
import { getGifs } from '../../src/helpers/getGifs';


describe('Pruebas del helper getGifs()', () => {
    
    test('debe retornar un arreglo de Gifs', async() => {
        const gifs = await getGifs('Dead pool');
        expect( gifs.length ).toBeGreaterThan( 0 );
    });

    test('debe retornar un arreglo con las propiedades esperadas', async() => {
        const gifs = await getGifs('Dead pool');

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});