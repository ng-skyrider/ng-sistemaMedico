
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';
 
 const backIn = (translateX: string, translateY: string, translateZ: string ) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', 
                  transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ }) scale3d(0.7, 0.7, 0.7)`, opacity: 0.7, easing: 'ease', offset: 0 }),
          style({ transform: 'translate3d(0, 0, 0)              scale3d(0.7, 0.7, 0.7)', opacity: 0.7, easing: 'ease', offset: 0.8 }),
          style({ transform: 'translate3d(0, 0, 0)              scale3d(1, 1, 1)',       opacity: 1, easing: 'ease', offset: 1 })
        ])
      )
    ])
  );

const DEFAULT_DURATION = 1000;
const DEFAULT_DURATION_1 = 1300;
const DEFAULT_SCALE = 1.3;





/**
 * 
 * @param nameTrigger is accepted string values:
**  'backInDown'
**  'backInLeft'
**  'backInRight'
**  'backInUp'
 * @param styleCSS? is accepted string values: e.g.:
** { 'transform-origin': 'center' }
** { 'transform-origin': 'center bottom' }
** other: 'translate3d()', 'animation-timing-function', 'opacity', 'backgroundColor', 'color' or A key-value style pair associating a CSS property with a value.
 * @param options?
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: //Duration in ms,
 **   delay: //Duration in ms,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 */
export const backEntrances = (
    nameTrigger:
    'backInDown' |
    'backInLeft' |
    'backInRight' |
    'backInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions): AnimationTriggerMetadata => {
  
  let defectTranslate: string = '10px';
  let defectScale: string = '0';

switch (nameTrigger) {
case 'backInDown': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('0', '-1200px', '0'); break; // backInDown
case 'backInLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' };  styleAnimation = backIn('-2000px', '0', '0'); break; // backInLeft
case 'backInRight': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('2000px', '0', '0'); break;
case 'backInUp': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('0', '1200px', '0'); break;
    default:
}
    return back_entrances(options!,
              nameTrigger,
              transitionState!,
            [ styleCSS!, styleAnimation!],
            { delay: 0, duration: DEFAULT_DURATION, translateX: defectTranslate, scale: defectScale });
    
}




/**
 * 
 * @param nameTrigger is accepted string values:
**  'backInDown'
**  'backInLeft'
**  'backInRight'
**  'backInUp'
 * @param styleCSS? is accepted string values: e.g.:
** { 'transform-origin': 'center' }
** { 'transform-origin': 'center bottom' }
** other: 'translate3d()', 'animation-timing-function', 'opacity', 'backgroundColor', 'color' or A key-value style pair associating a CSS property with a value.
 * @param options?
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: //Duration in ms,
 **   delay: //Duration in ms,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 */
export const backEntrancesOnEnter = (
    nameTrigger:
    'backInDown' |
    'backInLeft' |
    'backInRight' |
    'backInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions): AnimationTriggerMetadata => {
  
  let defectTranslate: string = '10px';
  let defectScale: string = '0';

switch (nameTrigger) {
case 'backInDown': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('0', '-1200px', '0'); break; // backInDown
case 'backInLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' };  styleAnimation = backIn('-2000px', '0', '0'); break; // backInLeft
case 'backInRight': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('2000px', '0', '0'); break;
case 'backInUp': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = backIn('0', '1200px', '0'); break;
    default:
}
    return back_entrances_onEnter(options!,
              nameTrigger,
              transitionState!,
            [ styleCSS!, styleAnimation!],
            { delay: 0, duration: DEFAULT_DURATION, translateX: defectTranslate, scale: defectScale });
    
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
** `duration`: number | 1000 | 1s }
* */
export function back_entrances(
    options: IAllAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translateX: string, scale: string  }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr || `0 ${(options && options.direction) || '<=>'} 1` ,
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translateX,
                scale: (options && options.scale) || defaultValue.scale
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
** `duration`: number | 1000 | 1s }
* */
export function back_entrances_onEnter(
    options: IAddScaleTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
    defaultValue: { delay: number, duration: number, translateX: string, scale: string  }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  ':enter',
         [
            style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translateX,
                scale: (options && options.scale) || defaultValue.scale
            }
        })
    ]);
  }