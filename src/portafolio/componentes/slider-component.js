import { sliderControlls, intervalState } from "../settings/info-app-portafolio";


export const SliderComponent = () => {
    
    const arrows  = document.querySelectorAll( '.arrow' );
    const sliderElements = document.querySelectorAll( '.slider-element' );
    
    automaticControlSlider( sliderElements );

    //Events Listeners en Slider

    arrows.forEach( arrow => {
        arrow.addEventListener( 'click', ( event ) => {
            controlBehaviorOfSlider( sliderElements, event.target )
        } )
    });
    
    window.addEventListener( 'scroll', changeOpacitySlider )
}

/**
 * 
 * @param { DivElement [] } sliders 
 */

const automaticControlSlider = ( sliderElements ) => {

    setInterval(() => {    
        if( !intervalState.isActive ) return;
        
        let idElementToShow = findIdtoShow( sliderControlls.step, sliderElements.length );
        changeSliderClasses( sliderElements, idElementToShow );

    }, 4000);

}

/**
 * 
 * @param { HTMLElement [] } sliders Lista de Sliders
 * @param { HTMLElement } arrowClicked Flecha que recibio el click
 */
const controlBehaviorOfSlider = ( sliderElements, arrowClicked = null ) => {

    if( arrowClicked  ){

        if( arrowClicked.classList.contains( 'arrow-left' ) ) sliderControlls.step = 'back';

        let idElementToShow = findIdtoShow( sliderControlls.step, sliderElements.length );
        changeSliderClasses( sliderElements, idElementToShow );
        
        intervalState.isActive = false;

        setTimeout(() => {
            sliderControlls.step = 'next';
            intervalState.isActive = true;
        }, 6000);

    }
}

/**
 * 
 * @param {String} step el sentido del movimento
 * @param {Number} idLastElement => numero de elementos del slider
 * @returns 
 */
const findIdtoShow = ( step, idLastElement ) => {

    let idElementToShow;
    let idSliderActive = + ( document.querySelector( '.sld-active' ).getAttribute( 'data-id' ) );

    if( step === 'back' ){
        idSliderActive === 1 ? idElementToShow = idLastElement : idElementToShow = idSliderActive - 1;
        return idElementToShow;
    }
    idSliderActive === idLastElement ? idElementToShow = 1 : idElementToShow = idSliderActive + 1; 

    return idElementToShow;
}

    
/**
 * 
 * @param { HTMLElement[] } sliderElements 
 * @param {Number} idElementToShow
 */
const changeSliderClasses = ( sliderElements, idElementToShow ) => {

    sliderElements.forEach( element => {

        element.classList.remove( 'sld-active' );

        if( element.getAttribute( 'data-id' ) == idElementToShow ){
            element.classList.add( 'sld-active' );
        }
    })
}


export const changeOpacitySlider = () => {

    const background = document.querySelector( '#fondo' );

    if( window.scrollY !== 0 ){
        background.classList.add( 'black-transform' );
    }else {
        background.classList.remove( 'black-transform' );
    }

}