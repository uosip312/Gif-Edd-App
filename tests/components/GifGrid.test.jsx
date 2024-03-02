/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'Dead Pool';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('Debe mostrar items cuando se cargan las imagenes de useFetchGifs', () => {
        const gifs = [
            {
                id: '123',
                title: 'Dead Pool',
                url: 'https://localost/deadpool.jpg'
            },
            {
                id: '456',
                title: 'Superman',
                url: 'https://localost/superman.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});