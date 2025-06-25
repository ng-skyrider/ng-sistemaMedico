
import { trigger, stagger, transition, state, style, animate, keyframes, query,
    animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
    AUTO_STYLE, 
    AnimationMetadataType} from '@angular/animations';

 
 import { IAnimationOptions, 
          IAllAnimationOptions, IAddTranslateAnimationOptions,
          IAddScaleTranslateAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

 const bounceOutDown = (translateX: string, translateY: string, translateZ: string) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
          style({ transform: 'translate3d(0, 10px, 0)', easing: 'ease', offset: 0.2 }),
          style({ transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.4 }),
          style({ transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.45 }),
          style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 0.45 }),
          style({ opacity: 0, easing: 'ease', offset: 1 })
        ])
      )
    ])
  );

  const bounceOutLeft = (translateX: string, translateY: string, translateZ: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', easing: 'ease', offset: 0.2 }),
        style({ opacity: 0, transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const bounceOutRight = (translateX: string, translateY: string, translateZ: string) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', easing: 'ease', offset: 0.2 }),
        style({ opacity: 0, transform:  `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const bounceOutUp = (translateX: string, translateY: string, translateZ: string) =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
          style({ transform: 'translate3d(0, -10px, 0)', easing: 'ease', offset: 0.2 }),
          style({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.4 }),
          style({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.45 }),
          style({ transform: `translate3d( ${ translateX }, ${ translateY }, ${ translateZ })`, easing: 'ease', offset: 1 })
        ])
      ),
      animation([
        animate(
          '{{duration}}ms {{delay}}ms',
          keyframes([
            style({ opacity: 1, easing: 'ease', offset: 0 }),
            style({ opacity: 1, easing: 'ease', offset: 0.45 }),
            style({ opacity: 0, easing: 'ease', offset: 1 })
          ])
        )
      ])
    ])
  );

  const bounceOut = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'ease', offset: 0.2 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.5 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.55 }),
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 0.55 }),
          style({ opacity: 0, easing: 'ease', offset: 1 })
        ])
      )
    ])
  );

  
const DEFAULT_DURATION = 1000;


/**
 * 
 * @param nameTrigger is accepted string values:
** 'bounceOut'
** 'bounceOutDown'
** 'bounceOutLeft'
** 'bounceOutRight'
** 'bounceOutUp'
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
export const bouncingExits = (
    nameTrigger:
    'bounceOut' |
    'bounceOutDown' |
    'bounceOutLeft' |
    'bounceOutRight' |
    'bounceOutUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'bounceOut': transitionState = '0 => 1';  styleAnimation = bounceOut(); my_duration = 750; noT=true;  break;
case 'bounceOutDown': transitionState = '0 => 1';   styleAnimation = bounceOutDown('0', '2000px', '0'); noT=false;  break;
case 'bounceOutLeft': transitionState = '0 => 1';  styleAnimation = bounceOutLeft('-2000px', '0', '0'); noT=false;  break;
case 'bounceOutRight': transitionState = '0 => 1';  styleAnimation = bounceOutRight('2000px', '0', '0'); noT=false;  break;
case 'bounceOutUp': transitionState = '0 => 1';  styleAnimation = bounceOutUp('0', '-2000px', '0'); noT=false;  break;
    default:
}

    if(noT){
        return bouncing_exits_noTranslate(options!,
                        nameTrigger,
                        transitionState!,
                        styleAnimation!,
                      { delay: 0, duration: my_duration });
    }else{
        return bouncing_exits(options!,
            nameTrigger,
            transitionState!,
            styleAnimation!,
          { delay: 0, duration: my_duration, translate: '3000px'  });
    }

}


/**
 * 
 * @param nameTrigger is accepted string values:
** 'bounceOut'
** 'bounceOutDown'
** 'bounceOutLeft'
** 'bounceOutRight'
** 'bounceOutUp'
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
export const bouncingExitsOnLeave = (
    nameTrigger:
    'bounceOut' |
    'bounceOutDown' |
    'bounceOutLeft' |
    'bounceOutRight' |
    'bounceOutUp' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleAnimation?: AnimationReferenceMetadata,
    options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;
  let my_translate = '2000px';

switch (nameTrigger) {
case 'bounceOut': transitionState = ':leave';     styleAnimation = bounceOut(); my_duration = 750; noT=true;  break;
case 'bounceOutDown': transitionState = ':leave'; styleAnimation = bounceOutDown('0', '-3000px', '0'); noT=false;  break;
case 'bounceOutLeft': transitionState = ':leave'; styleAnimation = bounceOutLeft('-3000px', '0', '0'); noT=false;  break;
case 'bounceOutRight': transitionState = ':leave';styleAnimation = bounceOutRight('3000px', '0', '0'); noT=false;  break;
case 'bounceOutUp': transitionState = ':leave';   styleAnimation = bounceOutUp('0', '3000px', '0'); noT=false;  break;
    default:
}

    if(noT){
        return bouncing_exits_noTranslate(options!,
                        nameTrigger,
                        transitionState!,
                        styleAnimation!,
                      { delay: 0, duration: my_duration });
    }else{
        return bouncing_exits(options!,
            nameTrigger,
            transitionState!,
            styleAnimation!,
          { delay: 0, duration: my_duration, translate: my_translate  });
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
export function bouncing_exits_noTranslate(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    styleAnimation: AnimationReferenceMetadata,
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [ ...useAnimationIncludingChildren( styleAnimation, options)], {
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
export function bouncing_exits(
    options: IAddTranslateAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
    styleAnimation: AnimationReferenceMetadata,
    defaultValue: { delay: number, duration: number, translate: string }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [ ...useAnimationIncludingChildren( styleAnimation, options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration,
                translate: (options && options.translate) || defaultValue.translate,
            }
        })
    ]);
  }
