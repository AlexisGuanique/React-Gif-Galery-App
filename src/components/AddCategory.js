import React, { useState } from 'react'
import PropTypes from 'prop-types';


// Creamos componente para añadir una categoria
export const AddCategory = ( { setCategories } ) => {
    
    // Definimos el estado inicial de nuestro value
    const [InputValue, setInputValue] = useState('');


    // Extraemos el valor a guardar
    const handlInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }


    // De esta manera evitamos que refresque el formulario de la manera que viene por defecto
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validamos que el valor ingresado sea una palabra mayor de 2 letras
        if ( InputValue.trim().length > 1) {

            setCategories( cats => [ InputValue, ...cats ]);
            setInputValue('');
        }
    };
  

    // Lo que renderiza nuestro componente
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ InputValue }
                onChange= { handlInputChange }         
            />
        </form>
  )
};

// De esta manera decimos que la Prop setCategories es requerida para utilizar nuestro componente AddCategory
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
