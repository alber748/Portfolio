import {  removeClass, addClass, removeClassManyElements } from "../../utilities/change-clases";

export const HeaderComponent = () =>{

    const headerElement = document.querySelector('header'),
          optionsHeader = document.querySelectorAll( '.option-nav' ),
          windowHeight = document.querySelector( 'section' ).clientHeight;

    // Events Listeners
    window.addEventListener("scroll", () => {
        
        animarHeader( headerElement );
        changeClassOptionsHeader( optionsHeader, windowHeight );
    } );

}


const animarHeader = ( headerElement ) =>{

    if( window.scrollY !== 0 ){
        removeClass( headerElement, ['reduccion-height'] );
        addClass( headerElement, ['aumento-height'] );
    }else {
        addClass( headerElement, ['reduccion-height'] );
        removeClass( headerElement, ['aumento-height'] );
    }
}

/**
 * 
 * @param {NodeList} optionsHeader 
 */
const changeClassOptionsHeader = ( optionsHeader, windowHeight ) => {

    for (const i in optionsHeader) {
        let index = ( +i ) + 1;
        
        if( window.scrollY < windowHeight ){
            
            removeClassManyElements( optionsHeader, ['option-active'] );
            addClass( optionsHeader[0], ['option-active'] );
        }
        else if( window.scrollY >= windowHeight * index ){

            removeClassManyElements( optionsHeader, ['option-active'] );
            addClass( optionsHeader[index], ['option-active'] );
        }
    }
}
