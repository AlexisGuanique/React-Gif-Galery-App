import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// CUSTOM HOOK
export const useFetchGifs = ( category ) => {
    // De esta manera manejamos el estado del componente
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // De esta manera indicamos el efecto para que solo se dispare cuando el componente sea modificado
    useEffect( ()=>{
        
        getGifs( category )
            .then( imgs => {
                    
                setState({
                    data: imgs,
                    loading: false
                });

            }, 2000);
                
        

    },[ category ]);


    

    return state; // { data: [], loading: true }
}