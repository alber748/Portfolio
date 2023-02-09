/**
 * 
 * @param { HTMLElement } element  
 * @param { string [] } classList array con clases a eliminar;
 */
export const addClass = ( element, classList) => {

    if( !Array.isArray(classList) ) throw new Error( 'El parametro classList debe ser un array de clases' );

    classList.forEach(cls => {
        element.classList.add( cls );
    });
}

/**
 * 
 * @param { HTMLElement } element  
 * @param { string [] } classList array con clases a eliminar;
 */
export const removeClass= ( element, classList) => {

    if( !Array.isArray(classList) ) throw new Error( 'El parametro classList debe ser un array de clases' );

    classList.forEach(cls => {
        element.classList.remove( cls );
    });
}



/**
 * 
 * @param { HTMLElement[] } elements 
 * @param { string [] } classList array con clases a eliminar;
 */
export const removeClassManyElements= ( elements, classList) => {

    if( !Array.isArray(classList) ) throw new Error( 'El parametro classList debe ser un array de clases' );

    elements.forEach(element => {
        
        classList.forEach(cls => {

            element.classList.remove( cls );    

        });

    });
}

