
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, IAddDegreesTranslateAnimationOptions,
          IAllAnimationOptions, IAddTranslateAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

const hinge = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out', offset: 0 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.2 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.4 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.6 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.8 }),
        style({ opacity: 0, 'transform-origin': 'top left', transform: 'translate3d(0, 700px, 0)', easing: 'ease-in-out', offset: 1 })
      ])
    )
  ]);

  const jackInTheBox = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ 'transform-origin': 'center bottom', transform: 'scale(0.1) rotate(30deg)', easing: 'ease', offset: 0 }),
          style({ 'transform-origin': 'center bottom', transform: 'rotate(-10deg)', easing: 'ease', offset: 0.5 }),
          style({ 'transform-origin': 'center bottom', transform: 'rotate(3deg)', easing: 'ease', offset: 0.7 }),
          style({ 'transform-origin': 'center bottom', transform: 'scale(1)', easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([style({ visibility: 'visible', opacity: 0, offset: 0 }), style({ opacity: 1, offset: 1 })])
      )
    ])
  );

  const rollIn = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          opacity: 0,
          transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)',
          easing: 'ease',
          offset: 0
        }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const rollOut = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const DEFAULT_DURATION = 2000;
  
/**
 * 
 * @param nameTrigger is accepted string values:
** 'hinge'
 * @param styleCSS? is accepted string values: e.g.:
** { 'transform-origin': 'center' }
** { 'transform-origin': 'center bottom' }
** other: 'translate3d()', 'animation-timing-function', 'opacity', 'backgroundColor', 'color' or A key-value style pair associating a CSS property with a value.
 * @param options?
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 */
export const specials = (
    nameTrigger:
    'hinge' |
    'jackInTheBox' |
    'rollIn' |
    'rollOut', transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noDT?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;
  let my_translate = '100%';
  let my_degrees = 120;

switch (nameTrigger) {
case 'hinge': transitionState =  '0 => 1'; styleCSS = {}; styleAnimation = hinge(); my_duration = 2000; noDT=true; break; // ':leave'
case 'jackInTheBox': transitionState =  '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = jackInTheBox(); noDT=true;  break; // ':enter'
case 'rollIn': transitionState =  '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = rollIn(); my_translate = '-100%'; my_degrees = -120; noDT=false;  break; // ':enter'
case 'rollOut': transitionState =  '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = rollOut(); my_translate = '100%'; my_degrees = 120; noDT=false;  break; // ':enter'
 default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleCSS = {  visibility: 'hidden' };
        styleAnimation=hinge();
        break;
}
    if(noDT){
        return Specials_noTranslate(options!,
            nameTrigger,
            transitionState!,
            [ styleCSS!, styleAnimation!],
          { delay: 0, duration: my_duration });

    }else{
        return specials_(options!,
            nameTrigger,
            transitionState!,
            [ styleCSS!, styleAnimation!],
          { delay: 0, duration: my_duration, translate: my_translate, degrees: my_degrees });
        
    }
    
}

export const specialsOn = (
    nameTrigger:
    'hinge' |
    'jackInTheBox' |
    'rollIn' |
    'rollOut', transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noDT?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;
  let my_translate = '100%';
  let my_degrees = 120;

switch (nameTrigger) {
case 'hinge': transitionState =  ':leave'; styleCSS = {}; styleAnimation = hinge(); my_duration = 2000; noDT=true; break; // ':leave'
case 'jackInTheBox': transitionState =  ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = jackInTheBox(); noDT=true;  break; // ':enter'
case 'rollIn': transitionState =  ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = rollIn(); my_translate = '-100%'; my_degrees = -120; noDT=false;  break; // ':enter'
case 'rollOut': transitionState =  ':leave'; styleCSS = { visibility: 'hidden' }; styleAnimation = rollOut(); my_translate = '100%'; my_degrees = 120; noDT=false;  break; // ':enter'
 default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleCSS = {  visibility: 'hidden' };
        styleAnimation=hinge();
        break;
}
    if(noDT){
        return Specials_noTranslate(options!,
            nameTrigger,
            transitionState!,
            [ styleCSS!, styleAnimation!],
          { delay: 0, duration: my_duration });

    }else{
        return specials_(options!,
            nameTrigger,
            transitionState,
            [ styleCSS, styleAnimation],
          { delay: 0, duration: my_duration, translate: my_translate, degrees: my_degrees });
        
    }
    
}



 /**
 * attention_seekers:
 * @param options is interface of the type IAttentionSeekerAnimationOptions,
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   translate?: number | 10px }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value 
 ** '0 => 1' | '0 <=> 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps is a Array with two values
 ** value[0] is a is a object (with name `styleCSS`) with code CSS or {key: name} e.g:   [ { hereCodeCSS || 'transform-origin': 'center bottom' }    |    style({ styleCSS }),
 ** value[1] is type AnimationReferenceMetadata or is Starts a reusable animation that is created using the `animation() function`. ] 
*  @param defaultValue is Object
** { `delay`: number | 1 | 0,,
** `duration`: number | 1000 | 1s,
** `translate`: string | 3000px }
* */
export function Specials_noTranslate(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
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
 **   translate?: number | 10px }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value 
 ** '0 => 1' | '0 <=> 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps is a Array with two values
 ** value[0] is a is a object (with name `styleCSS`) with code CSS or {key: name} e.g:   [ { hereCodeCSS || 'transform-origin': 'center bottom' }    |    style({ styleCSS }),
 ** value[1] is type AnimationReferenceMetadata or is Starts a reusable animation that is created using the `animation() function`. ] 
*  @param defaultValue is Object
** { `delay`: number | 1 | 0,,
** `duration`: number | 1000 | 1s,
** `translate`: string | 3000px }
* */
export function specials_(
    options: IAddDegreesTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translate: string, degrees: number }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                degrees: (options && options.degrees) || defaultValue.degrees, //120
                translate: (options && options.translate) || defaultValue.translate //'100%'
            }
        })
    ]);
  }
