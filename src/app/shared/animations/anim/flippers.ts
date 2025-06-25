
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions, IAddDegreesAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

 const flip = () =>
 animation([
   animate(
     '{{duration}}ms {{delay}}ms',
     keyframes([
       style({
         transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
         easing: 'ease-out',
         offset: 0
       }),
       style({
         transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
         easing: 'ease-out',
         offset: 0.4
       }),
       style({
         transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
         easing: 'ease-out',
         offset: 0.5
       }),
       style({
         transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
         easing: 'ease-in',
         offset: 0.8
       }),
       style({
         transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
         easing: 'ease-in',
         offset: 1
       })
     ])
   )
 ]);


const flipInX = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: 'visible',
        transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)', opacity: 0, easing: 'ease-in', offset: 0 }),
      style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',   opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
      style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',    opacity: 1, easing: 'ease-in', offset: 0.6 }),
      style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',  easing: 'ease', offset: 0.8 }),
      style({ transform: 'perspective(400px)',                           easing: 'ease', offset: 1 })
    ])
  )
]);

const flipInY = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible',
         transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)', opacity: 0,  easing: 'ease-in', offset: 0 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',  opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',   opacity: 1, easing: 'ease-in', offset: 0.6 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8 }),
        style({ transform: 'perspective(400px)',                          easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const flipOutX = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)', opacity: 0, easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const flipOutY = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)', opacity: 0, easing: 'ease', offset: 1 })
      ])
    )
  ]);


const DEFAULT_DURATION = 1000;

/**
* 

* @param nameTrigger values 
** 'flip'
** 'flipInX'
** 'flipInY'
** 'flipOutX'
** 'flipOutY'
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
export const flippers = (
    nameTrigger:
    'flip' |
    'flipInX' |
    'flipInY' |
    'flipOutX' |
    'flipOutY' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 90;

   switch (nameTrigger) {
   case 'flip':    transitionState = '0 <=> 1'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flip(); defaultDuration = 1000; noT = true;  break; // 'fadeOut' |
   case 'flipInX': transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipInX(); defaultDuration = 1000; noT = false;  break; // flipInX
   case 'flipInY': transitionState = '0 => 1'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {'backface-visibility': 'visible' }; styleAnimation=flipInY(); defaultDuration = 1000; noT = false;  break; // flipInY
   case 'flipOutX':transitionState = '0 => 1'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipOutX(); noT = false;  defaultDuration = 750;  break; // fadeOutDown
   case 'flipOutY':transitionState = '0 => 1'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipOutY();  defaultDuration = 750;  noT = false;    break; // fadeOutDownBig
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 => 1';
       styleCSS1 = { visibility: 'hidden' };
       styleCSS2 = { };
       styleAnimation=flipInX();
         noT = false;
       break;
   }
   if(noT){
       return flippers_noDegrees(options!,
          nameTrigger,
          transitionState,
          [ styleCSS1, styleCSS2, styleAnimation],
         { delay: 0, duration: defaultDuration });
   }else{
       return flippers_(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleCSS2, styleAnimation],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
   }

}


/**
* @param nameTrigger values 
** 'flip'
** 'flipInX'
** 'flipInY'
** 'flipOutX'
** 'flipOutY'
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
export const flippersOn = (
    nameTrigger:
    'flip' |
    'flipInX' |
    'flipInY' |
    'flipOutX' |
    'flipOutY' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
     styleAnimation?: AnimationReferenceMetadata,
     options?: IAnimationOptions, noT?: boolean ): AnimationTriggerMetadata => {
        
    let defaultDuration = 1000;
    let defaultDegrees = 90;

   switch (nameTrigger) {
   case 'flip':    transitionState = ':enter'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flip(); defaultDuration = 1000; noT = true;  break; // 'fadeOut' |
   case 'flipInX': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipInX(); defaultDuration = 1000; noT = false;  break; // flipInX
   case 'flipInY': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {'backface-visibility': 'visible' }; styleAnimation=flipInY(); defaultDuration = 1000; noT = false;  break; // flipInY
   case 'flipOutX':transitionState = ':leave'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipOutX(); noT = false;  defaultDuration = 750;  break; // fadeOutDown
   case 'flipOutY':transitionState = ':leave'; styleCSS1 = {}; styleCSS2 = { 'backface-visibility': 'visible' }; styleAnimation=flipOutY();  defaultDuration = 750;  noT = false;    break; // fadeOutDownBig
   default:
       // aqui nunca llegará pero por si acaso
       transitionState = '0 <=> 1';
       styleCSS1 = { visibility: 'hidden' };
       styleCSS2 = { };
       styleAnimation=flipInX();
         noT = false;
       break;
   }
   if(noT){
       return flippers_noDegrees(options!,
          nameTrigger,
          transitionState,
          [ styleCSS1, styleCSS2, styleAnimation],
         { delay: 0, duration: defaultDuration });
   }else{
       return flippers_(options!,
           nameTrigger,
           transitionState,
           [ styleCSS1, styleCSS2, styleAnimation],
          { delay: 0, duration: defaultDuration, degrees: defaultDegrees });
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
export function flippers_noDegrees(
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
  export function flippers_(
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

