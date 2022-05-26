import React from 'react';
import { PropTypes } from 'prop-types';

export const GifGridItem = ( {title, url } ) => {

    // console.log( id, title, url );

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }/>
            <p className='title'>{ title }</p>
        </div>
    )
};


// Configuracion de los PropTypes, de esta manera indicamos los lineamientos para trabajar con nuestro componente
GifGridItem.protoType = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
