import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Creacion del componente
export const GifExpertApp = () => {
    
    
    // De esta manera ceramos la lista de elementos para poder luego manipularla con el set categories
    const [categories, setCategories] = useState(['Dragon Ball Z'])
    

    return (
        <>  
            <h1>Gif Galery App</h1>

            {/* Le pasamos setCategories como una propiedad a nuestro componente AddCategory */}
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    // Mapeamos la lista categories para poder recorres elemento por elemento
                    categories.map( category => 
                        <GifGrid 
                            key= { category }
                            category= { category }
                        />
                    )
                }
            </ol>
        </>
    )
};


