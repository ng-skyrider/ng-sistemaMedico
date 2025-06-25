
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationReferenceMetadata } from '@angular/animations';
 
 
 import { IAnimationOptions, IAddTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';
 

 /**
  * 
  * @param noTranslate is notTranslate or not translate3d()
  * @param translateX is tx
  * @param translateY is ty
  * @param translateZ is tz
  */
 export const fadingEntrancesAnimation = (noTranslate: boolean, translateX: string, translateY: string, translateZ: string ): AnimationReferenceMetadata => {
     if(noTranslate){
        return animation([
            animate(
              '{{duration}}ms {{delay}}ms',
              keyframes([
                style({ visibility: 'visible', opacity: 0, easing: 'ease', offset: 0 }),
                style({ opacity: 1, easing: 'ease', offset: 1 })])
            )
          ]);
     }else{         
        return animation([
            animate(
            `{{duration}}ms {{delay}}ms`,
            keyframes([
                style({ visibility: 'visible', opacity: 0, transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 0 }),
                style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
            ])
            )
        ]);
        }
 }

 

 const DEFAULT_DURATION = 1000;







 /** FadeInAnimation  *------------------------------------------------------------------------------- */

/**
 * 
 * @param nameTrigger values 
 ** 'fadeIn' 
 ** 'fadeInBottomLeft' 
 ** 'fadeInBottomRight' 
 ** 'fadeInDown' 
 ** 'fadeInDownBig' 
 ** 'fadeInLeft' 
 ** 'fadeInLeftBig' 
 ** 'fadeInRight' 
 ** 'fadeInRightBig' 
 ** 'fadeInTopLeft' 
 ** 'fadeInTopRight' 
 ** 'fadeInUp' 
 ** 'fadeInUpBig'
 * @param transitionState values '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
 * @param styleCSS is object, here you can add css code e.g.:  { visibility: 'hidden' }
** { 'transform-origin': 'center' }
** { 'transform-origin': 'center bottom' }
** other: 'translate3d()', 'animation-timing-function', 'opacity', 'backgroundColor', 'color' or A key-value style pair associating a CSS property with a value.
 * @param styleAnimation is a AnimationReferenceMetadata or use method fadingEntrancesAnimation(noTranslate: boolean, translateX?: string, translateY?: string, translateZ?: string )
 * @param options 
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 */
 export const fadingEntrances = (
     nameTrigger:
      'fadeIn' |
      'fadeInBottomLeft' |
      'fadeInBottomRight' |
      'fadeInDown' |
      'fadeInDownBig' |
      'fadeInLeft' |
      'fadeInLeftBig' |
      'fadeInRight' |
      'fadeInRightBig' |
      'fadeInTopLeft' |
      'fadeInTopRight' |
      'fadeInUp' |
      'fadeInUpBig' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
      styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
      styleAnimation?: AnimationReferenceMetadata,
      options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
        
    switch (nameTrigger) {
    case 'fadeIn': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(true, "0", "0", "0"); noT = true; break; // 'fadeIn' |
    case 'fadeInBottomLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,   "-100%","100%","0" ); noT = false; break; // fadeInBottomLeft
    case 'fadeInBottomRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false, "100%", "100%","0" ); noT = false; break; // fadeInBottomRight
    case 'fadeInDown':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "0",   "-100%","0" ); noT = false; break; // fadeInDown
    case 'fadeInDownBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "0", "-2000px","0" ); noT = false; break; // fadeInDownBig
    case 'fadeInLeft':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "-100%",   "0","0" ); noT = false; break; // fadeInLeft
    case 'fadeInLeftBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-2000px", "0","0" ); noT = false; break; // fadeInLeftBig
    case 'fadeInRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "100%",    "0","0" ); noT = false; break; // fadeInRight
    case 'fadeInRightBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "2000px",  "0","0" ); noT = false; break; // fadeInRightBig
    case 'fadeInTopLeft':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-100%","-100%","0"); noT = false; break; // fadeInTopLeft
    case 'fadeInTopRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "100%", "-100%","0"); noT = false; break; // fadeInTopRight
    case 'fadeInUp':   transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,         "0",    "100%", "0"); noT = false; break; // fadeInUp
    case 'fadeInUpBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "0",  "2000px", "0"); noT = false; break; // fadeInUpB
    default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleCSS = { visibility: 'hidden' };
        styleAnimation=fadingEntrancesAnimation(false, "0", "0", "0");
          noT = false;
        break;
    }
    if(noT){
        return fading_trigger_noTranslate(options!,
           nameTrigger,
           transitionState,
          [ styleCSS, styleAnimation],
          { delay: 0, duration: DEFAULT_DURATION });
    }else{
        return fading_entrances(options!,
            nameTrigger,
            transitionState,
           [ styleCSS, styleAnimation],
           { delay: 0, duration: DEFAULT_DURATION, translateX: '-100%' });
    }

}

/**
 * 
 * @param nameTrigger values 
 ** 'fadeIn' 
 ** 'fadeInBottomLeft' 
 ** 'fadeInBottomRight' 
 ** 'fadeInDown' 
 ** 'fadeInDownBig' 
 ** 'fadeInLeft' 
 ** 'fadeInLeftBig' 
 ** 'fadeInRight' 
 ** 'fadeInRightBig' 
 ** 'fadeInTopLeft' 
 ** 'fadeInTopRight' 
 ** 'fadeInUp' 
 ** 'fadeInUpBig'
 * @param transitionState values '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
 * @param styleCSS is object, here you can add css code e.g.:  { visibility: 'hidden' }
** { 'transform-origin': 'center' }
** { 'transform-origin': 'center bottom' }
** other: 'translate3d()', 'animation-timing-function', 'opacity', 'backgroundColor', 'color' or A key-value style pair associating a CSS property with a value.
 * @param styleAnimation is a AnimationReferenceMetadata or use method fadingEntrancesAnimation(noTranslate: boolean, translateX?: string, translateY?: string, translateZ?: string )
 * @param options 
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 */
export const fadingEntrancesOnEnter = (
    nameTrigger:
     'fadeIn' |
     'fadeInBottomLeft' |
     'fadeInBottomRight' |
     'fadeInDown' |
     'fadeInDownBig' |
     'fadeInLeft' |
     'fadeInLeftBig' |
     'fadeInRight' |
     'fadeInRightBig' |
     'fadeInTopLeft' |
     'fadeInTopRight' |
     'fadeInUp' |
     'fadeInUpBig' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
     styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
       
   switch (nameTrigger) {
   case 'fadeIn': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(true, "0", "0", "0"); noT = true; break; // 'fadeIn' |
   case 'fadeInBottomLeft': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,   "-100%","100%","0" ); noT = false; break; // fadeInBottomLeft
   case 'fadeInBottomRight':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false, "100%", "100%","0" ); noT = false; break; // fadeInBottomRight
   case 'fadeInDown':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "0",   "-100%","0" ); noT = false; break; // fadeInDown
   case 'fadeInDownBig':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "0", "-2000px","0" ); noT = false; break; // fadeInDownBig
   case 'fadeInLeft':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "-100%",   "0","0" ); noT = false; break; // fadeInLeft
   case 'fadeInLeftBig':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-2000px", "0","0" ); noT = false; break; // fadeInLeftBig
   case 'fadeInRight':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "100%",    "0","0" ); noT = false; break; // fadeInRight
   case 'fadeInRightBig':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "2000px",  "0","0" ); noT = false; break; // fadeInRightBig
   case 'fadeInTopLeft':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-100%","-100%","0"); noT = false; break; // fadeInTopLeft
   case 'fadeInTopRight':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "100%", "-100%","0"); noT = false; break; // fadeInTopRight
   case 'fadeInUp':   transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,         "0",    "100%", "0"); noT = false; break; // fadeInUp
   case 'fadeInUpBig':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "0",  "2000px", "0"); noT = false; break; // fadeInUpB
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = ':enter';
       styleCSS = { visibility: 'hidden' };
       styleAnimation=fadingEntrancesAnimation(false, "0", "0", "0");
         noT = false;
       break;
   }
   if(noT){
       return fading_trigger_noTranslate(options!,
          nameTrigger,
          transitionState,
         [ styleCSS, styleAnimation],
         { delay: 0, duration: DEFAULT_DURATION });
   }else{
       return fading_entrances(options!,
           nameTrigger,
           transitionState,
          [ styleCSS, styleAnimation],
          { delay: 0, duration: DEFAULT_DURATION, translateX: '-100%' });
   }

}







/************************************************************************************************ */
/**
 * fading-entrances:
 * @param options is interface of the type IFadingAnimationOptions,
 *  { anchor: <that will be used in a template>, duration: <Duration in ms>, delay: <Duration in ms>,
 *    animateChildren?: 'before' | 'together' | 'after' | 'none'; }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps [ { code CSS || visibility: 'hidden' }, styleAnimation ] is array, with object {key: name} | 'hidden' | 'visible' and other type AnimationReferenceMetadata 
*  @param defaultValue is Object { delay: number, duration: number }m with {value 1 | 0, 1000 | 1s }
 */
export function fading_trigger_noTranslate(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string,
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{

    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr , [style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration
            }
        })
    ]);
}
// function fading_trigger_noTranslate(options: IFadingEntrancesAnimationOptions,
//     nameTrigger: string,
//     transitionStateChangeExpr: '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement',
//     steps: [ styleVisibility: 'hidden' | 'visible', styleAnimation: AnimationReferenceMetadata ],
//     defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
//     return trigger((options && options.anchor) || nameTrigger , [
//         transition( transitionStateChangeExpr , [style({ visibility: steps[0] }), ...useAnimationIncludingChildren( steps[1], options)], {
//             params: {
//                 delay: (options && options.delay) || defaultValue.delay,
//                 duration: (options && options.duration) || defaultValue.duration
//             }
//         })
//     ]);
// }


  /************************************************************************************************ */
 /**
  * fading-entrances:
  * @param options is interface of the type IFadingAnimationOptions,
  *  { anchor: <that will be used in a template>, duration: <Duration in ms>, delay: <Duration in ms>,
  *    translate?: string | 2000px | 100%, animateChildren?: 'before' | 'together' | 'after' | 'none'; }
  * @param nameTrigger is type string, is name trigger * 
  * @param transitionStateChangeExpr is value '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
  * @param steps [ { code CSS || visibility: 'hidden' }, styleAnimation ] is array, with object {key: name} | 'hidden' | 'visible' and other type AnimationReferenceMetadata 
  * @param defaultValue is Object { delay: number, duration: number, translateX: string }m with {value 1 | 0, 1000 | 1s , 2000px | 100% }
  */
export function fading_entrances(
    options: IAddTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string |'0 => 1' | '* => *' | '* <=> *' | ':enter' | ':leave' | ':increment' | ':decrement',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translateX: string }  ): AnimationTriggerMetadata{
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr , [style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translateX
            }
        })
    ]);
}
//  export function fading_entrances(options: IFadingEntrancesAnimationOptions,
//     nameTrigger: string,
//     transitionStateChangeExpr: '0 => 1' | '* => *' | '* <=> *' | ':enter' | ':leave' | ':increment' | ':decrement',
//     steps: [ styleVisibility: 'hidden' | 'visible', styleAnimation: AnimationReferenceMetadata ],
//     defaultValue: { delay: number, duration: number, translateX: string }  ): AnimationTriggerMetadata{
//     return trigger((options && options.anchor) || nameTrigger , [
//         transition( transitionStateChangeExpr , [style({ visibility: steps[0] }), ...useAnimationIncludingChildren( steps[1] || fadingEntrancesAnimation(true), options)], {
//             params: {
//                 delay: (options && options.delay) || defaultValue.delay,
//                 duration: (options && options.duration) || defaultValue.duration,
//                 translate: (options && options.translate) || defaultValue.translateX
//             }
//         })
//     ]);
// }
 
 