import { useState } from 'react';
import { AddCategori, GifGrid  } from './components';

export const GifExpertApp = () => {


    const [categories , setCategories] = useState([ 'One Punch']);


    const onAddCategory = (newCategory) =>{

        if( categories.includes( newCategory ))  return;
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>


            {/* titulo */}
            <h1>GifExpertApp</h1>



            {/* input */}
            <AddCategori 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }/>



            {/* listado de gif */}
                {
                    categories.map( category => (
                        <GifGrid 
                        key={category} 
                        category={ category }/>
                    ))
                }
        
        </>


    )




}