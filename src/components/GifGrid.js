import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { PropTypes } from 'prop-types' 


// Componente que consume la api_key y muestra los gif
export const GifGrid = ( { category } ) => {


    // Utilizamos nuestro custom hook
    const { data:images, loading } = useFetchGifs( category );

    // console.log(images);

    return (
        <>
            <h2 className='animate__animated animate__fadeIn'> { category } </h2>

            { loading && <p className='animate__animated animate__flash'>Cargando...</p> }
            
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
