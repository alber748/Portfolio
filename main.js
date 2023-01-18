import './style.css'
import { AppPortfolio } from './src/portafolio/portafolio'
import { Animations, changeClassOptionsHeader } from './src/portafolio/settings/animations'
import { changeOpacitySlider } from './src/portafolio/componentes/slider-component';

AppPortfolio();
Animations();


(() => {    
    
    window.onload = () => {
        
        const navBar = document.querySelector( 'header' );
        const optionsHeader = document.querySelectorAll( '.option-nav' );

        if( window.scrollY !== 0 ){
            navBar.classList.add( 'aumento-height' );
            changeClassOptionsHeader( optionsHeader );
            changeOpacitySlider();
        }
    } 
})()