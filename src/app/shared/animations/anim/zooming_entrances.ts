
import { trigger, transition, style, animate, keyframes, 
    group, animation, AnimationTriggerMetadata, AnimationReferenceMetadata } from '@angular/animations';

 
 import { IAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

 const zoomInDown = () =>
 animation([
   animate(
     '{{duration}}ms {{delay}}ms',
     keyframes([
       style({
         visibility: 'visible',
         opacity: 0,
         transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
         easing: 'ease',
         offset: 0
       }),
       style({
         opacity: 1,
         transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
         easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
         offset: 0.6
       }),
       style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
     ])
   )
 ]);

 const zoomInLeft = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-3000px, 0, 0)',
          easing: 'ease',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
          easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          offset: 0.6
        }),
        style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
      ])
    )
  ]);

  const zoomInRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
          easing: 'ease',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
          easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          offset: 0.6
        }),
        style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
      ])
    )
  ]);

  const zoomInUp = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
          easing: 'ease',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
          easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          offset: 0.6
        }),
        style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
      ])
    )
  ]);

  const zoomIn = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 0, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 0.5 }),
          style({ opacity: 1, easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
        ])
      )
    ])
  );



 const DEFAULT_DURATION = 1000;
  
/**
 * 
 * @param nameTrigger is accepted string values:
** 'zoomIn'
** 'zoomInDown'
** 'zoomInLeft'
** 'zoomInRight'
** 'zoomInUp'
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
export const zoomingEntrances = (
    nameTrigger:
    'zoomIn' |
    'zoomInDown' |
    'zoomInLeft' |
    'zoomInRight' |
    'zoomInUp' ,
    options?: IAnimationOptions ,
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    transitionState?: string, // 
    styleAnimation?: AnimationReferenceMetadata,): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'zoomIn': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomIn();   break;
case 'zoomInDown': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInDown();  break;
case 'zoomInLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInLeft();   break;
case 'zoomInRight': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInRight();   break;
case 'zoomInUp': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInUp();   break;
    default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleCSS = { visibility: 'hidden' };
        styleAnimation=zoomIn();
        break;
}

    return zooming_entrances_noTranslate(options!,
        nameTrigger,
        transitionState!,
      [ styleCSS!, styleAnimation!],
      { delay: 0, duration: my_duration });
    
}

/**
 * 
 * @param nameTrigger is accepted string values:
** 'zoomIn'
** 'zoomInDown'
** 'zoomInLeft'
** 'zoomInRight'
** 'zoomInUp'
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
export const zoomingEntrancesOnEnter = (
    nameTrigger:
    'zoomIn' |
    'zoomInDown' |
    'zoomInLeft' |
    'zoomInRight' |
    'zoomInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'zoomIn': transitionState =     ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomIn();   break;
case 'zoomInDown': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInDown();  break;
case 'zoomInLeft': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInLeft();   break;
case 'zoomInRight': transitionState =':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInRight();   break;
case 'zoomInUp': transitionState =   ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = zoomInUp();   break;
    default:
        // aqui nunca llegará pero por si acaso
        transitionState = ':enter';
        styleCSS = { visibility: 'hidden' };
        styleAnimation=zoomIn();
        break;
}

    return zooming_entrances_noTranslate(options!,
        nameTrigger,
        transitionState!,
      [ styleCSS!, styleAnimation!],
      { delay: 0, duration: my_duration });
    
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
export function zooming_entrances_noTranslate(
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
