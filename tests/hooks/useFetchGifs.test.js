/* eslint-disable no-undef */

import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Probar en hook useFetchGifs', () => {
    
    const category = 'Dead Pool';

    test('Debe de regresar el estado inicial', () => {

        const { result: { current: hookResult } } = renderHook( () => useFetchGifs(category) );
        const { images, isLoading } = hookResult;
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de regresar el estado inicial', async() => {

        const { result } = renderHook( () => useFetchGifs(category) );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)            
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});