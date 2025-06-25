
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions,
          IAddTranslateAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
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
               style({ opacity: 1, easing: 'ease', offset: 0 }),
               style({ opacity: 0, easing: 'ease', offset: 1 })])
           )
         ]);
    }else{         
       return animation([
           animate(
           `{{duration}}ms {{delay}}ms`,
           keyframes([
               style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
               style({ opacity: 0, transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 1 })
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
** 'fadeOut' 
** 'fadeOutBottomLeft' 
** 'fadeOutBottomRight' 
** 'fadeOutDown' 
** 'fadeOutDownBig' 
** 'fadeOutLeft' 
** 'fadeOutLeftBig' 
** 'fadeOutRight' 
** 'fadeOutRightBig' 
** 'fadeOutTopLeft' 
** 'fadeOutTopRight' 
** 'fadeOutUp' 
** 'fadeOutUpBig'
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
export const fadingExits = (
    nameTrigger:
     'fadeOut' |
     'fadeOutBottomLeft' |
     'fadeOutBottomRight' |
     'fadeOutDown' |
     'fadeOutDownBig' |
     'fadeOutLeft' |
     'fadeOutLeftBig' |
     'fadeOutRight' |
     'fadeOutRightBig' |
     'fadeOutTopLeft' |
     'fadeOutTopRight' |
     'fadeOutUp' |
     'fadeOutUpBig' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
     styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
    
    let defaultTranslate = '100%';

   switch (nameTrigger) {
   case 'fadeOut': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(true, "0", "0", "0"); noT = true;  break; // 'fadeOut' |
   case 'fadeOutBottomLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,   "-100%","100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutBottomLeft
   case 'fadeOutBottomRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false, "100%", "100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutBottomRight
   case 'fadeOutDown':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "0",   "100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutDown
   case 'fadeOutDownBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "0", "2000px","0" ); noT = false;  defaultTranslate = '2000px'; break; break; // fadeOutDownBig
   case 'fadeOutLeft':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "-100%",   "0","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutLeft
   case 'fadeOutLeftBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-2000px", "0","0" ); noT = false;  defaultTranslate = '2000px'; break; // fadeOutLeftBig
   case 'fadeOutRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "100%",    "0","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutRight
   case 'fadeOutRightBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "2000px",  "0","0" ); noT = false;  defaultTranslate = '2000px'; break; // fadeOutRightBig
   case 'fadeOutTopLeft':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-100%","-100%","0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutTopLeft
   case 'fadeOutTopRight':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "100%", "-100%","0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutTopRight
   case 'fadeOutUp':   transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,         "0",    "-100%", "0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutUp
   case 'fadeOutUpBig':  transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "0",  "-2000px", "0"); noT = false;  defaultTranslate = '2000px'; break; // fadeOutUpBig
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
          styleAnimation,
         { delay: 0, duration: DEFAULT_DURATION });
   }else{
       return fading_entrances(options!,
           nameTrigger,
           transitionState,
           styleAnimation,
          { delay: 0, duration: DEFAULT_DURATION, translate: defaultTranslate });
   }

}

/**
* 
* @param nameTrigger values 
** 'fadeOut' 
** 'fadeOutBottomLeft' 
** 'fadeOutBottomRight' 
** 'fadeOutDown' 
** 'fadeOutDownBig' 
** 'fadeOutLeft' 
** 'fadeOutLeftBig' 
** 'fadeOutRight' 
** 'fadeOutRightBig' 
** 'fadeOutTopLeft' 
** 'fadeOutTopRight' 
** 'fadeOutUp' 
** 'fadeOutUpBig'
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
export const fadingExitsOnLeave = (
    nameTrigger:
     'fadeOut' |
     'fadeOutBottomLeft' |
     'fadeOutBottomRight' |
     'fadeOutDown' |
     'fadeOutDownBig' |
     'fadeOutLeft' |
     'fadeOutLeftBig' |
     'fadeOutRight' |
     'fadeOutRightBig' |
     'fadeOutTopLeft' |
     'fadeOutTopRight' |
     'fadeOutUp' |
     'fadeOutUpBig' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
     styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
    
    let defaultTranslate = '100%';

   switch (nameTrigger) {
   case 'fadeOut': transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(true, "0", "0", "0"); noT = true;  break; // 'fadeOut' |
   case 'fadeOutBottomLeft': transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,   "-100%","100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutBottomLeft
   case 'fadeOutBottomRight':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false, "100%", "100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutBottomRight
   case 'fadeOutDown':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "0",   "100%","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutDown
   case 'fadeOutDownBig':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "0", "2000px","0" ); noT = false;  defaultTranslate = '2000px'; break; break; // fadeOutDownBig
   case 'fadeOutLeft':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,        "-100%",   "0","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutLeft
   case 'fadeOutLeftBig':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-2000px", "0","0" ); noT = false;  defaultTranslate = '2000px'; break; // fadeOutLeftBig
   case 'fadeOutRight':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "100%",    "0","0" ); noT = false;  defaultTranslate = '100%'; break; // fadeOutRight
   case 'fadeOutRightBig':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "2000px",  "0","0" ); noT = false;  defaultTranslate = '2000px'; break; // fadeOutRightBig
   case 'fadeOutTopLeft':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,     "-100%","-100%","0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutTopLeft
   case 'fadeOutTopRight':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,    "100%", "-100%","0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutTopRight
   case 'fadeOutUp':   transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,         "0",    "-100%", "0"); noT = false;  defaultTranslate = '100%'; break; // fadeOutUp
   case 'fadeOutUpBig':  transitionState = ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation=fadingEntrancesAnimation(false,       "0",  "-2000px", "0"); noT = false;  defaultTranslate = '2000px'; break; // fadeOutUpBig
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = ':leave';
       styleCSS = { visibility: 'hidden' };
       styleAnimation=fadingEntrancesAnimation(false, "0", "0", "0");
         noT = false;
       break;
   }
   if(noT){
       return fading_trigger_noTranslate(options!,
          nameTrigger,
          transitionState,
          styleAnimation,
         { delay: 0, duration: DEFAULT_DURATION });
   }else{
       return fading_entrances(options!,
           nameTrigger,
           transitionState,
           styleAnimation,
          { delay: 0, duration: DEFAULT_DURATION, translate: defaultTranslate });
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
   styleAnimation: AnimationReferenceMetadata,
   defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{

   return trigger((options && options.anchor) || nameTrigger , [
       transition( transitionStateChangeExpr , [ ...useAnimationIncludingChildren( styleAnimation, options)], {
           params: {
               delay: (options && options.delay) || defaultValue.delay,
               duration: (options && options.duration) || defaultValue.duration
           }
       })
   ]);
}

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
   styleAnimation: AnimationReferenceMetadata,
   defaultValue: { delay: number, duration: number, translate: string }  ): AnimationTriggerMetadata{
   return trigger((options && options.anchor) || nameTrigger , [
       transition( transitionStateChangeExpr , [...useAnimationIncludingChildren( styleAnimation, options)], {
           params: {
               delay: (options && options.delay) || defaultValue.delay,
               duration: (options && options.duration) || defaultValue.duration,
               translate: (options && options.translate) || defaultValue.translate
           }
       })
   ]);
}
