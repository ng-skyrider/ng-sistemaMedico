
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions, IAddTranslateAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

 const slideIn = (translateX: string, translateY: string, translateZ: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', transform: `translate3d(${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);


  const DEFAULT_DURATION = 1000;

  
/**
 * 
 * @param nameTrigger is accepted string values:
** 'slideInDown'
** 'slideInLeft'
** 'slideInRight'
** 'slideInUp'
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
export const slidingEntrances = (
    nameTrigger:
    'slideInDown' |
    'slideInLeft' |
    'slideInRight' |
    'slideInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;
  let defaultTranslate = '100%';

switch (nameTrigger) {
case 'slideInDown': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn("0", "-100%", "0"); noT=true;  break;
case 'slideInLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn('-100%', '0', '0'); noT=false;  break;
case 'slideInRight': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn('100%', '0', '0'); noT=false;  break;
case 'slideInUp': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn("0", "100%", "0"); noT=false;  break;
    default:
      // aqui nunca llegará pero por si acaso
      transitionState = '0 => 1';
      styleCSS = { visibility: 'hidden' };
      styleAnimation=slideIn("0", "-100%", "0");
      break;
}

    return sliding_entrances(options!,
        nameTrigger,
        transitionState!,
      [ styleCSS!, styleAnimation!],
      { delay: 0, duration: my_duration, translate: defaultTranslate  });
    
}

  
/**
 * 
 * @param nameTrigger is accepted string values:
** 'slideInDown'
** 'slideInLeft'
** 'slideInRight'
** 'slideInUp'
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
export const slidingEntrancesOnEnter = (
    nameTrigger:
    'slideInDown' |
    'slideInLeft' |
    'slideInRight' |
    'slideInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;
  let defaultTranslate = '100%';

switch (nameTrigger) {
case 'slideInDown': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn("0", "-100%", "0"); noT=true;  break;
case 'slideInLeft': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn('-100%', '0', '0'); noT=false;  break;
case 'slideInRight': transitionState =':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn('100%', '0', '0'); noT=false;  break;
case 'slideInUp': transitionState =   ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = slideIn("0", "100%", "0"); noT=false;  break;
    default:
      // aqui nunca llegará pero por si acaso
      transitionState = '0 => 1';
      styleCSS = { visibility: 'hidden' };
      styleAnimation=slideIn("0", "-100%", "0");
      break;
}

    return sliding_entrances(options!,
        nameTrigger,
        transitionState!,
      [ styleCSS!, styleAnimation!],
      { delay: 0, duration: my_duration, translate: defaultTranslate  });
    
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
export function sliding_entrances(
    options: IAddTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translate: string }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translate,
            }
        })
    ]);
  }
