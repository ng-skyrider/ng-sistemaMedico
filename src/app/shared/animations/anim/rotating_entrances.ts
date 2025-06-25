
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions,
          IAddTranslateAnimationOptions, IAddDegreesAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';



  const rotateIn = (RotateX: string, RotateY: string, RotateZ: string, Degrees: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: `rotate3d(${ RotateX }, ${ RotateY }, ${ RotateZ }, ${ Degrees })`, easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);


const DEFAULT_DURATION = 1000;


/**
* 

* @param nameTrigger values 
** 'rotateIn'
** 'rotateInDownLeft'
** 'rotateInDownRight'
** 'rotateInUpLeft'
** 'rotateInUpRight'
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
export const rotatingEntrances = (
    nameTrigger:
    'rotateIn' |
    'rotateInDownLeft' |
    'rotateInDownRight' |
    'rotateInUpLeft' |
    'rotateInUpRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 45;

   switch (nameTrigger) {
   case 'rotateIn':    transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'center' };           styleAnimation=rotateIn("0", "0", "1", "-200deg"); defaultDegrees = -200; break; // 'rotateIn' |
   case 'rotateInDownLeft': transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'left bottom' }; styleAnimation=rotateIn("0", "0", "1", "-45deg"); defaultDegrees = -45; break; // rotateInDownLeft
   case 'rotateInDownRight': transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {'transform-origin': 'right bottom' };styleAnimation=rotateIn("0", "0", "1", "45deg");defaultDegrees = 45;  break; // rotateInDownRight
   case 'rotateInUpLeft':transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'left bottom' };    styleAnimation=rotateIn("0", "0", "1", "45deg"); defaultDegrees = 45;  break; // rotateInUpLeft
   case 'rotateInUpRight':transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'right bottom' };  styleAnimation=rotateIn("0", "0", "1", "-90deg");  defaultDegrees = -90;     break; // rotateInUpRight
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 => 1';
       styleCSS1 = { visibility: 'hidden' };
       styleCSS2 = { 'transform-origin': 'center' };
       styleAnimation=rotateIn("0", "0", "1", "-200deg");
       break;
   }
       return rotating_entrances(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleCSS2, styleAnimation],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
   
}




/**
* 

* @param nameTrigger values 
** 'rotateIn'
** 'rotateInDownLeft'
** 'rotateInDownRight'
** 'rotateInUpLeft'
** 'rotateInUpRight'
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
export const rotatingEntrancesOnEnter = (
    nameTrigger:
    'rotateIn' |
    'rotateInDownLeft' |
    'rotateInDownRight' |
    'rotateInUpLeft' |
    'rotateInUpRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 45;

   switch (nameTrigger) {
   case 'rotateIn':    transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'center' };           styleAnimation=rotateIn("0", "0", "1", "-200deg"); defaultDegrees = -200; break; // 'rotateIn' |
   case 'rotateInDownLeft': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'left bottom' }; styleAnimation=rotateIn("0", "0", "1", "-45deg"); defaultDegrees = -45; break; // rotateInDownLeft
   case 'rotateInDownRight': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {'transform-origin': 'right bottom' };styleAnimation=rotateIn("0", "0", "1", "45deg");defaultDegrees = 45;  break; // rotateInDownRight
   case 'rotateInUpLeft':transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'left bottom' };    styleAnimation=rotateIn("0", "0", "1", "45deg"); defaultDegrees = 45;  break; // rotateInUpLeft
   case 'rotateInUpRight':transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'right bottom' };  styleAnimation=rotateIn("0", "0", "1", "-90deg");  defaultDegrees = -90;     break; // rotateInUpRight
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = ':enter';
       styleCSS1 = { visibility: 'hidden' };
       styleCSS2 = { };
       styleAnimation=rotateIn("0", "0", "1", "-200deg");
       break;
   }
       return rotating_entrances(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleCSS2, styleAnimation],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
   

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
export function rotating_entrances_noDegrees(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string,
    steps: [ styleCSS1: { [key: string]: string | number;}, styleCSS2: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
 
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr , [  style( steps[0] ), style( steps[1] ), ...useAnimationIncludingChildren( steps[2], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration
            }
        })
    ]);
 }
 

/**
 * attention_seekers:
 * @param options is interface of the type IAttentionSeekerAnimationOptions,
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   degrees?: number | 90 }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value 
 ** '0 => 1' | '0 <=> 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps is a Array with two values
 ** value[0] is a is a object (with name `styleCSS`) with code CSS or {key: name} e.g:   [ { hereCodeCSS || 'transform-origin': 'center bottom' }    |    style({ styleCSS }),
 ** value[1] is type AnimationReferenceMetadata or is Starts a reusable animation that is created using the `animation() function`. ] 
*  @param defaultValue is Object
** { `delay`: number | 1 | 0,,
** `duration`: number | 1000 | 1s }
* */
  export function rotating_entrances(
    options: IAddDegreesAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS1: { [key: string]: string | number;}, styleCSS2: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, degrees: number }  ): AnimationTriggerMetadata{

    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr || ':enter' ,
         [
            style( steps[0] ), style( steps[1] ), ...useAnimationIncludingChildren( steps[2], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                degrees: (options && options.degrees) || defaultValue.degrees
            }
        })
    ]);
}

