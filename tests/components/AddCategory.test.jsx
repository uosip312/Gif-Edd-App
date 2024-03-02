/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {

        const inputValue = 'Dead Pool';
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        //trigger event on HTMLElements
        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe(inputValue);
    });
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue    = 'Dead Pool';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        //trigger event on HTMLElements
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });
    
    test('No debe de llamar onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form  = screen.getByRole('form');
        //trigger event on HTMLElements
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});
 