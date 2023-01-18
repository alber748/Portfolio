
export const Animations = () => {

    const optionsHeader = document.querySelectorAll( '.option-nav' );
    window.addEventListener( 'scroll',()=> { 
        changeClassOptionsHeader( optionsHeader ) 
    });
}

/**
 * 
 * @param {NodeList} optionsHeader 
 */

export const changeClassOptionsHeader = ( optionsHeader ) => {

    const windowHeight = document.querySelector( 'section' ).clientHeight;

    for (const i  in optionsHeader) {
        let index = ( +i ) + 1;

        if( window.scrollY < windowHeight ){

            deleteClass( optionsHeader );
            optionsHeader[0].classList.add( 'option-active' );
        }
        if( window.scrollY >= windowHeight * index ){

            deleteClass( optionsHeader );
            optionsHeader[index].classList.add( 'option-active' );
        }
    }
}

/**
 * 
 * @param {NodeList} optionsHeader 
 */
export const deleteClass = ( optionsHeader ) => {

    optionsHeader.forEach(option => {
        option.classList.remove( 'option-active' );
    });

}