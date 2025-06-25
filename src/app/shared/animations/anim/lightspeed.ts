
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions,  IAddTranslateAnimationOptions,
          IAllAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';
 
 const lightSpeedIn = (translateX: string, skewX: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible',
                opacity: 0, transform: `translate3d(${ translateX }, 0, 0) skewX(${ skewX })`, easing: 'ease-out', offset: 0 }),
        style({ opacity: 1, transform: 'skewX(20deg)', easing: 'ease-out', offset: 0.6 }),
        style({ opacity: 1, transform: 'skewX(-5deg)', easing: 'ease-out', offset: 0.8 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease-out', offset: 1 })
      ])
    )
  ]);

  const lightSpeedOut = (translateX: string, skewX: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, easing: 'ease-in', offset: 0 }),
        style({ opacity: 0, transform: `translate3d(${ translateX }, 0, 0) skewX(${ skewX })`, easing: 'ease-in', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;





/**
* @param nameTrigger values 
** 'lightSpeedInLeft'
** 'lightSpeedInRight'
** 'lightSpeedOutLeft'
** 'lightSpeedOutRight'
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
**   degrees?: 90 }
*/
export const lightSpeed = (
    nameTrigger:
    'lightSpeedInLeft' |
    'lightSpeedInRight' |
    'lightSpeedOutLeft' |
    'lightSpeedOutRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultTranslate = '100%';

   switch (nameTrigger) {
   case 'lightSpeedInLeft':  transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleAnimation=lightSpeedIn("-100%", "30deg"); noT = true;  break; // 'fadeOut' |
   case 'lightSpeedInRight': transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' };  styleAnimation=lightSpeedIn("100%", "-30deg");  noT = false;  break; // flipInX
   case 'lightSpeedOutLeft': transitionState = '0 => 1'; styleCSS1 = {};  styleAnimation=lightSpeedOut("-100%", "-30deg");  noT = false;  break; // flipInY
   case 'lightSpeedOutRight':transitionState = '0 => 1'; styleCSS1 = {}; styleAnimation=lightSpeedOut("100%", "30deg"); noT = false;   break; // fadeOutDown
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 <=> 1';
       styleCSS1 = { visibility: 'hidden' };
       styleAnimation=lightSpeedIn("-100%", "30deg");
         noT = false;
       break;
   }
   if(noT){
       return lights_speed_noTranslate(options!,
          nameTrigger,
          transitionState,
          [ styleCSS1, styleAnimation],
         { delay: 0, duration: defaultDuration });
   }else{
       return lights_speed(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleAnimation],
          { delay: 0, duration: defaultDuration, translate: defaultTranslate });
   }

}



/**
* @param nameTrigger values 
** 'lightSpeedInLeft'
** 'lightSpeedInRight'
** 'lightSpeedOutLeft'
** 'lightSpeedOutRight'
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
**   degrees?: 90 }
*/
export const lightSpeedOn = (
    nameTrigger:
    'lightSpeedInLeft' |
    'lightSpeedInRight' |
    'lightSpeedOutLeft' |
    'lightSpeedOutRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultTranslate = '100%';

   switch (nameTrigger) {
   case 'lightSpeedInLeft':  transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleAnimation=lightSpeedIn("-100%", "30deg"); noT = true;  break; // 'fadeOut' |
   case 'lightSpeedInRight': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' };  styleAnimation=lightSpeedIn("100%", "-30deg");  noT = false;  break; // flipInX
   case 'lightSpeedOutLeft': transitionState = ':leave'; styleCSS1 = {};  styleAnimation=lightSpeedOut("-100%", "-30deg");  noT = false;  break; // flipInY
   case 'lightSpeedOutRight':transitionState = ':leave'; styleCSS1 = {}; styleAnimation=lightSpeedOut("100%", "30deg"); noT = false;   break; // fadeOutDown
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 <=> 1';
       styleCSS1 = { visibility: 'hidden' };
       styleAnimation=lightSpeedIn("-100%", "30deg");
         noT = false;
       break;
   }
   if(noT){
       return lights_speed_noTranslate(options!,
          nameTrigger,
          transitionState,
          [ styleCSS1, styleAnimation],
         { delay: 0, duration: defaultDuration });
   }else{
       return lights_speed(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleAnimation],
          { delay: 0, duration: defaultDuration, translate: defaultTranslate });
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
export function lights_speed_noTranslate(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string,
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
        
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ,  [ style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
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
 export function lights_speed(
    options: IAddTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string |'0 => 1' | '* => *' | '* <=> *' | ':enter' | ':leave' | ':increment' | ':decrement',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translate: string }  ): AnimationTriggerMetadata{
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr , [ style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translate
            }
        })
    ]);
 }
 