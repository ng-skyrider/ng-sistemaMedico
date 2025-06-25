
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions,
          IAddTranslateAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';


 const bounceInDown = (translateX: string, translateY: string, translateZ: string) =>
 animation(
   group([
     animate(
       '{{duration}}ms {{delay}}ms',
       keyframes([
         style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
         style({ transform: 'translate3d(0, 25px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
         style({ transform: 'translate3d(0, -10px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
         style({ transform: 'translate3d(0, 5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
         style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
       ])
     ),
     animate(
       '{{duration}}ms {{delay}}ms',
       keyframes([
         style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
         style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
         style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
       ])
     )
   ])
 );

 const bounceInLeft = (translateX: string, translateY: string, translateZ: string) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'translate3d(25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'translate3d(-10px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
          style({ transform: 'translate3d(5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
          style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

  const bounceInRight = (translateX: string, translateY: string, translateZ: string) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'translate3d(-25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'translate3d(10px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
          style({ transform: 'translate3d(-5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
          style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

  const bounceInUp = (translateX: string, translateY: string, translateZ: string) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'translate3d(0, -20px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'translate3d(0, 10px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
          style({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
          style({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

  const bounceIn = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8 }),
          style({ transform: 'scale3d(1, 1, 1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

 const DEFAULT_DURATION = 1000;



/**
 * 
 * @param nameTrigger is accepted string values:
** 'bounceIn'
** 'bounceInDown'
** 'bounceInLeft'
** 'bounceInRight'
** 'bounceInUp'
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
export const bouncingEntrances = (
    nameTrigger:
    'bounceIn' |
    'bounceInDown' |
    'bounceInLeft' |
    'bounceInRight' |
    'bounceInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'bounceIn': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceIn(); my_duration = 750; noT=true;  break;
case 'bounceInDown': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' };  styleAnimation = bounceInDown('0', '-3000px', '0'); noT=false;  break;
case 'bounceInLeft': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInLeft('-3000px', '0', '0'); noT=false;  break;
case 'bounceInRight': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInRight('3000px', '0', '0'); noT=false;  break;
case 'bounceInUp': transitionState = '0 => 1'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInUp('0', '3000px', '0'); noT=false;  break;
    default:
}

    if(noT){
        return bouncing_entrances_noTranslate(options!,
                        nameTrigger,
                        transitionState!,
                      [ styleCSS!, styleAnimation!],
                      { delay: 0, duration: my_duration });
    }else{
        return bouncing_entrances(options!,
            nameTrigger,
            transitionState!,
          [ styleCSS!, styleAnimation!],
          { delay: 0, duration: my_duration, translate: '3000px'  });
    }

}


/**
 * 
 * @param nameTrigger is accepted string values:
** 'bounceIn'
** 'bounceInDown'
** 'bounceInLeft'
** 'bounceInRight'
** 'bounceInUp'
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
export const bouncingEntrancesOnEnter = (
    nameTrigger:
    'bounceIn' |
    'bounceInDown' |
    'bounceInLeft' |
    'bounceInRight' |
    'bounceInUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'bounceIn':      transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceIn(); my_duration = 750; noT=true;  break;
case 'bounceInDown':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' };  styleAnimation = bounceInDown('0', '-3000px', '0'); noT=false;  break;
case 'bounceInLeft':  transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInLeft('-3000px', '0', '0'); noT=false;  break;
case 'bounceInRight': transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInRight('3000px', '0', '0'); noT=false;  break;
case 'bounceInUp':    transitionState = ':enter'; styleCSS = { visibility: 'hidden' }; styleAnimation = bounceInUp('0', '3000px', '0'); noT=false;  break;
    default:
}

    if(noT){
        return bouncing_entrances_noTranslate(options!,
                        nameTrigger,
                        transitionState!,
                      [ styleCSS!, styleAnimation!],
                      { delay: 0, duration: my_duration });
    }else{
        return bouncing_entrances(options!,
            nameTrigger,
            transitionState!,
          [ styleCSS!, styleAnimation!],
          { delay: 0, duration: my_duration, translate: '3000px'  });
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
** `duration`: number | 1000 | 1s }
* */
export function bouncing_entrances_noTranslate(
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
                duration: (options && options.duration) || defaultValue.duration,
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
export function bouncing_entrances(
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
