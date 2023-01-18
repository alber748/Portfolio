

export const HeaderComponent = () =>{

    const headerElement = document.querySelector('header');
    const optionsHeader = document.querySelectorAll('.option-nav');
    const sections = document.querySelectorAll('section');
    
    // Events Listeners
    window.addEventListener("scroll", () => {
        gestionarHeader(headerElement, sections, optionsHeader )
    } )

}

const gestionarHeader = (headerElement, sections, optionsHeader ) => {

    animarHeader( headerElement, sections );
}

const animarHeader = ( headerElement, sections ) =>{

    if( window.scrollY !== 0 ){
        headerElement.classList.add( 'aumento-height' );
    }else {
        headerElement.classList.remove( 'aumento-height' )
        headerElement.classList.remove( 'reduccion-height' )
    }
}