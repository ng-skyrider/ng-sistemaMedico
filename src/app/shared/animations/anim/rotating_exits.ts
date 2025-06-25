
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions,
          IAddTranslateAnimationOptions, IAddDegreesAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';



  const rotateOut = (RotateX: string, RotateY: string, RotateZ: string, Degrees: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([      
        style({ opacity: 1, easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: `rotate3d(${ RotateX }, ${ RotateY }, ${ RotateZ }, ${ Degrees })`, easing: 'ease', offset: 1 })
      ])
    )
  ]);


const DEFAULT_DURATION = 1000;


/**
* @param nameTrigger values 
** 'rotateOut'
** 'rotateOutDownLeft'
** 'rotateOutDownRight'
** 'rotateOutUpLeft'
** 'rotateOutUpRight'
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
export const rotatingExits = (
    nameTrigger:
    'rotateOut' |
    'rotateOutDownLeft' |
    'rotateOutDownRight' |
    'rotateOutUpLeft' |
    'rotateOutUpRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 45;

   switch (nameTrigger) {
   case 'rotateOut':    transitionState = '0 => 1';      styleCSS2 = { 'transform-origin': 'center' };           styleAnimation=rotateOut("0", "0", "1", "200deg"); defaultDegrees = 200; break; // 'rotateOut' |
   case 'rotateOutDownLeft': transitionState = '0 => 1'; styleCSS2 = { 'transform-origin': 'left bottom' }; styleAnimation=rotateOut("0", "0", "1", "45deg"); defaultDegrees = 45; break; // rotateOutDownLeft
   case 'rotateOutDownRight': transitionState = '0 => 1';styleCSS2 = { 'transform-origin': 'right bottom' };styleAnimation=rotateOut("0", "0", "1", "-45deg");defaultDegrees = -45;  break; // rotateOutDownRight
   case 'rotateOutUpLeft':transitionState = '0 => 1';    styleCSS2 = { 'transform-origin': 'left bottom' };    styleAnimation=rotateOut("0", "0", "1", "-45deg"); defaultDegrees = -45;  break; // rotateOutUpLeft
   case 'rotateOutUpRight':transitionState = '0 => 1';   styleCSS2 = { 'transform-origin': 'right bottom' };  styleAnimation=rotateOut("0", "0", "1", "90deg");  defaultDegrees = 90;     break; // rotateOutUpRight
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 => 1';
       styleCSS2 = {  'transform-origin': 'center' };
       styleAnimation=rotateOut("0", "0", "1", "200deg");
       break;
   }
       return rotating_exits(options!,
           nameTrigger,
           transitionState!,
           [ styleCSS2!, styleAnimation!],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
   
}


/**
* @param nameTrigger values 
** 'rotateOut'
** 'rotateOutDownLeft'
** 'rotateOutDownRight'
** 'rotateOutUpLeft'
** 'rotateOutUpRight'
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
export const rotatingExitsOnLeave = (
    nameTrigger:
    'rotateOut' |
    'rotateOutDownLeft' |
    'rotateOutDownRight' |
    'rotateOutUpLeft' |
    'rotateOutUpRight' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 45;

   switch (nameTrigger) {
   case 'rotateOut':    transitionState = '0 => 1';      styleCSS2 = { 'transform-origin': 'center' };           styleAnimation=rotateOut("0", "0", "1", "200deg"); defaultDegrees = 200; break; // 'rotateOut' |
   case 'rotateOutDownLeft': transitionState = '0 => 1'; styleCSS2 = { 'transform-origin': 'left bottom' }; styleAnimation=rotateOut("0", "0", "1", "45deg"); defaultDegrees = 45; break; // rotateOutDownLeft
   case 'rotateOutDownRight': transitionState = '0 => 1';styleCSS2 = { 'transform-origin': 'right bottom' };styleAnimation=rotateOut("0", "0", "1", "-45deg");defaultDegrees = -45;  break; // rotateOutDownRight
   case 'rotateOutUpLeft':transitionState = '0 => 1';    styleCSS2 = { 'transform-origin': 'left bottom' };    styleAnimation=rotateOut("0", "0", "1", "-45deg"); defaultDegrees = -45;  break; // rotateOutUpLeft
   case 'rotateOutUpRight':transitionState = '0 => 1';   styleCSS2 = { 'transform-origin': 'right bottom' };  styleAnimation=rotateOut("0", "0", "1", "90deg");  defaultDegrees = 90;     break; // rotateOutUpRight
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 => 1';
       styleCSS2 = {  'transform-origin': 'center' };
       styleAnimation=rotateOut("0", "0", "1", "200deg");
       break;
   }
       return rotating_exits(options!,
           nameTrigger,
           transitionState!,
           [ styleCSS2!, styleAnimation!],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
   
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
  export function rotating_exits(
    options: IAddDegreesAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS2: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, degrees: number }  ): AnimationTriggerMetadata{

    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr || ':enter' ,
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                degrees: (options && options.degrees) || defaultValue.degrees
            }
        })
    ]);
}

