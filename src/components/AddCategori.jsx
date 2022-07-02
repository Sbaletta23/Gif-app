import { useState } from "react";
import ProtoType from 'prop-types';

// Destructuracion de props// para comunicar componente
export const AddCategori = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');





    const onInputChange = ({target}) => {
        setInputValue(target.value);
}




    const onSubmit = (event) => {
    event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;   
        setInputValue(''); 
        onNewCategory( inputValue.trim());
        
    

}
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}

AddCategori.protoTypes = {
    onNewCategory: ProtoType.func.isRequired,
}
