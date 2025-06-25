
import { trigger, transition, style, animate, keyframes, 
         group, animation, AnimationTriggerMetadata, AnimationReferenceMetadata } from '@angular/animations';

 
 import { IAnimationOptions } from '../models/animation.model';
 import { useAnimationIncludingChildren } from './use-animation-including-children';

 const zoomOutDown = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          'transform-origin': 'center bottom',
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
          easing: 'ease',
          offset: 0.4
        }),
        style({
          'transform-origin': 'center bottom',
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
          easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          offset: 1
        })
      ])
    )
  ]);

  const zoomOutLeft = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', easing: 'ease', offset: 0.4 }),
          style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)', easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([style({ 'transform-origin': 'center center', offset: 0 }), style({ 'transform-origin': 'left center', offset: 0.4 })])
      )
    ])
  );

  const zoomOutRight = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', easing: 'ease', offset: 0.4 }),
          style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)', easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([style({ 'transform-origin': 'center center', offset: 0 }), style({ 'transform-origin': 'right center', offset: 0.4 })])
      )
    ])
  );

  const zoomOutUp = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          'transform-origin': 'center bottom',
          opacity: 1,
          transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
          easing: 'ease',
          offset: 0.4
        }),
        style({
          'transform-origin': 'center bottom',
          opacity: 0,
          transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
          easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          offset: 1
        })
      ])
    )
  ]);

  const zoomOut = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
          style({ opacity: 0, easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 })
        ])
      )
    ])
  );

  
 const DEFAULT_DURATION = 1000;



/**
 * 
 * @param nameTrigger is accepted string values:
** 'zoomOut'
** 'zoomOutDown'
** 'zoomOutLeft'
** 'zoomOutRight'
** 'zoomOutUp'
 * @param options ? (optional)
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 * @param transitionState ? (optional)
 * is a state Change Expression type string expression or function that compares the previous and current animation states. 
 * 1 is interpreted true and 0 is interpreted false. The animation steps run when the expression evaluates to true.
 * A function is executed each time a state change occurs in the animation trigger element. The animation steps run when the function returns true.
 ** "state1 => state2" (is a defined animation state)
 ** "* => *" (is refer to a dynamic start or end state)
 ** "state1 => state2, state3 => state4" (is contain multiple state comma-separated statements)
 ** ":enter" and ":leave" (Special values) (is equivalent to "void => " and " => void")
 ** ":increment" || ":decrement" (Special values) (initiate a transition when a numeric value has increased or decreased in value.)
 ** Other e.g.: `"0 => 1"` || `"0 <= 1"` || `"0 <=> 1"` || `"* => *"` || `':enter'` || `"void => "` || `':leave'` || `" => void"` || `':increment'` || `':decrement'`
 */
export const zoomingExits = (
    nameTrigger:
    'zoomOut' |
    'zoomOutDown' |
    'zoomOutLeft' |
    'zoomOutRight' |
    'zoomOutUp' , 
    options?: IAnimationOptions,
    transitionState?: string,
    styleAnimation?: AnimationReferenceMetadata,
     ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'zoomOut': transitionState =     `0 => 1`; styleAnimation = zoomOut();   break;
case 'zoomOutDown': transitionState = `0 => 1`; styleAnimation = zoomOutDown();  break;
case 'zoomOutLeft': transitionState = `0 => 1`; styleAnimation = zoomOutLeft();   break;
case 'zoomOutRight': transitionState =`0 => 1`; styleAnimation = zoomOutRight();   break;
case 'zoomOutUp': transitionState =   `0 => 1`; styleAnimation = zoomOutUp();   break;
    default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleAnimation=zoomOut();
        break;
}

    return zooming_exits_noTranslate(options!,
        nameTrigger,
        transitionState!,
        styleAnimation!,
      { delay: 0, duration: my_duration });
    
}


/**
 * 
 * @param nameTrigger is accepted string values:
** 'zoomOut'
** 'zoomOutDown'
** 'zoomOutLeft'
** 'zoomOutRight'
** 'zoomOutUp'
 * @param options ? (optional)
 ** { anchor?: // that will be used in a template or CualquierNameTemplate ,
 **   duration?: <Duration in ms>,
 **   delay: <Duration in ms>,
 **   animateChildren?: 'before' | 'together' | 'after' | 'none',
 **   direction?: '<=>' | '=>',
 **   scale?: number | 1.3,
 **   translate?: number | 10px }
 * @param transitionState ? (optional)
 * is a state Change Expression type string expression or function that compares the previous and current animation states. 
 * 1 is interpreted true and 0 is interpreted false. The animation steps run when the expression evaluates to true.
 * A function is executed each time a state change occurs in the animation trigger element. The animation steps run when the function returns true.
 ** "state1 => state2" (is a defined animation state)
 ** "* => *" (is refer to a dynamic start or end state)
 ** "state1 => state2, state3 => state4" (is contain multiple state comma-separated statements)
 ** ":enter" and ":leave" (Special values) (is equivalent to "void => " and " => void")
 ** ":increment" || ":decrement" (Special values) (initiate a transition when a numeric value has increased or decreased in value.)
 ** Other e.g.: `"0 => 1"` || `"0 <= 1"` || `"0 <=> 1"` || `"* => *"` || `':enter'` || `"void => "` || `':leave'` || `" => void"` || `':increment'` || `':decrement'`
 */
export const zoomingExitsOnLeave = (
    nameTrigger:
    'zoomOut' |
    'zoomOutDown' |
    'zoomOutLeft' |
    'zoomOutRight' |
    'zoomOutUp' ,
    options?: IAnimationOptions,
    transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
    styleAnimation?: AnimationReferenceMetadata ): AnimationTriggerMetadata => {
  
  let my_duration = 1000;

switch (nameTrigger) {
case 'zoomOut': transitionState =     ':leave'; styleAnimation = zoomOut();   break;
case 'zoomOutDown': transitionState = ':leave'; styleAnimation = zoomOutDown();  break;
case 'zoomOutLeft': transitionState = ':leave'; styleAnimation = zoomOutLeft();   break;
case 'zoomOutRight': transitionState =':leave'; styleAnimation = zoomOutRight();   break;
case 'zoomOutUp': transitionState =   ':leave'; styleAnimation = zoomOutUp();   break;
    default:
        // aqui nunca llegará pero por si acaso
        transitionState = '0 => 1';
        styleAnimation=zoomOut();
        break;
}

    return zooming_exits_noTranslate(options!,
        nameTrigger,
        transitionState!,
        styleAnimation!,
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
export function zooming_exits_noTranslate(
    options: IAnimationOptions,
    nameTrigger: string,
    transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter', | ':leave'
    styleAnimation: AnimationReferenceMetadata,
    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
  
    return trigger((options && options.anchor) || nameTrigger , [
        transition( transitionStateChangeExpr ||  '0 => 1',
         [ ...useAnimationIncludingChildren( styleAnimation, options)], {
            params: {
                delay: (options && options.delay) || defaultValue.delay,
                duration: (options && options.duration) || defaultValue.duration
            }
        })
    ]);
  }

