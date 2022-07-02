import {fireEvent, render, screen} from "@testing-library/react";
import { AddCategori } from "../../components/AddCategori";

describe('Test: Formulario', () => { 



    test('debe de cambiar el valor de la caja de texto', () => {
        
        // Componente
        render( <AddCategori onNewCategory={ () =>{} } />);
        // Selec input
        const input = screen.getByRole('textbox');
        // Disparamos evento
        fireEvent.input( input, {target: {value: 'Saitama'}});
        // Esperamos mismo valor
        expect( input.value).toBe('Saitama');
        // Mostramos valor y estructura
        screen.debug();
    })

    test('debe llamar onNewCategory si el input tiene un valor' () => {
        const inputValue ='Saitama';
        const onNewCategory= jest.fn();

        // Componente
        render( <AddCategori onNewCategory={ () =>{} } />);
        // Selec form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Disparamos event
        fireEvent.input( input, {target: {value: inputValue }});
        fireEvent.submit( form );


        expect( onNewCategory).toHaveBeenCalledWith(inputValue);

        


})













})