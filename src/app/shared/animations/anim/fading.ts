
import { trigger, stagger, transition, state, style, animate, keyframes, query,
   animateChild, group, animation, AnimationTriggerMetadata, AnimationReferenceMetadata } from '@angular/animations';


import { IAnimationOptions } from '../models/animation.model';
import { useAnimationIncludingChildren } from './use-animation-including-children';

export interface IFadingEntrancesAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default (fadeInDown): 2000px, 
   * 
   * Default (fadeInLeft): -100%
   * 
   * *note: Do not use the symbol - or +
   */
  translate?: string;
}

const fadeInDown_ = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const fadeIn_ = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, easing: 'ease', offset: 0 }),
        style({ opacity: 1, easing: 'ease', offset: 1 })])
    )
  ]);

  const fadeIn__ = () => 
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d(-{{translate}})', easing: 'ease-out', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease-out', offset: 1 })])
    )
  ]);  

  const fadeIn___ = () => 
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'scale(1)', easing: 'linear', offset: 0 }),
        style({ opacity: 1, transform: 'scale(1.4)', easing: 'linear', offset: 1 })])
    )
  ]);  
    

  /**
   * translateX or tx default: 100%
   */
  const fadeInLeft = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

  const fadeInUp_ = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);


const DEFAULT_DURATION = 1000;










/** FadeInAnimation  *------------------------------------------------------------------------------- */

/** fadeIn Animation
 *  @param options * is a object/interface with values optional:
 ** { anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeIn = (options?: IAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger_noTranslate(options!,
    'fadeIn',
    '0 => 1',
    ['hidden', fadeIn_()],
    { delay: 0, duration: DEFAULT_DURATION });
}
/** Note: to configure it use `fadeIn()`  */
export const FadeIn =
  fading_trigger_noTranslate(null!,
    'fadeIn',
    '0 => 1',
    ['hidden', fadeIn_()],
    { delay: 0, duration: DEFAULT_DURATION });


/** fadeInOnEnter
 *  @param options * is a object/interface with values optional:
 ** { anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInOnEnter = (options?: IAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger_noTranslate(options!,
    'fadeInOnEnter',
    ':enter',
    ['hidden', fadeIn_()],
    { delay: 0, duration: DEFAULT_DURATION });
}
/** Note: to configure it use `fadeInOnEnter()`  */
export const FadeInOnEnter = 
  fading_trigger_noTranslate(null!,
    'fadeInOnEnter',
    ':enter',
    ['hidden', fadeIn_()],
    { delay: 0, duration: DEFAULT_DURATION });


/** fadeIn_animation Animation
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }
 *
 * MODO TEST <--------------------------------------------------- */
export const fadeIn_animation = (options?: IAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'FadeIn_animation',
    ':enter',
    ['hidden', fadeIn__()],
    { delay: 250, duration: 400, translateX: "5px" });
}
/** Note: to configure it use `fadeIn_animation()`  */
export const FadeIn_animation = 
  fading_trigger(null!,
    'FadeIn_animation',
    ':enter',
    ['hidden', fadeIn__()],
    { delay: 250, duration: 400, translateX: "5px" });


/** fadeIn_anim Animation
 *  @param options * is a object/interface with values optional:
 ** { anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }
 *
 * MODO TEST <--------------------------------------------------- */
export const fadeIn_anim = (options?: IAnimationOptions, easing = 'linear') => {
  return fading_trigger_noTranslate(options!,
    'fadeIn_anim',
    '* => *',
    ['hidden', fadeIn___()],
    { delay: 0, duration: DEFAULT_DURATION });
};
/** Note: to configure it use `fadeIn_anim()`  */
export const FadeIn_anim = 
  fading_trigger_noTranslate(null!,
    'fadeIn_anim',
    '* => *',
    ['hidden', fadeIn___()],
    { delay: 0, duration: DEFAULT_DURATION });



/****************** */
export const fadeInDown_animation = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return trigger((options && options.anchor) || 'fadeInDown', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInDown_(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}

export const fadeInDownBigAnimation = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return trigger((options && options.anchor) || 'fadeInDownBig', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInDown_(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
  return fading_trigger(options!,
    'fadeInDownBig',
    '0 => 1',
    ['hidden', fadeInUp_()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });
}

export const fadeInDownBigOnEnterAnimation = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return trigger((options && options.anchor) || 'fadeInDownBigOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInDown_(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}


export const fadeInDownOnEnter_animation = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return trigger((options && options.anchor) || 'fadeInDownOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }),
                 ...useAnimationIncludingChildren(fadeInDown_(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}

/* fadeInLeft ***************** */
export const fadeInLeft_animation =(options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return trigger((options && options.anchor) || 'fadeInLeft', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

/** fadeInLeftBig
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInLeftBig_animation = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'fadeInLeftBig',
    '0 => 1',
    ['hidden', fadeInLeft()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '2000px'  });
}


/** fadeInLeftBigOnEnter Animation
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInLeftOnEnter = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'fadeInLeftOnEnter',
    ':enter',
    ['hidden', fadeInLeft()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });
} 
/** Note: to configure it use `fadeInLeftOnEnter()`  */
export const FadeInLeftOnEnter = 
  fading_trigger(null!,
    'FadeInLeftOnEnter',
    ':enter',
    ['hidden', fadeInLeft()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });


/** fadeInLeftBigOnEnter Animation
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInLeftBigOnEnter = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'fadeInLeftBigOnEnter',
    ':enter',
    ['hidden', fadeInLeft()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '2000px'  });
}
/** Note: to configure it use `fadeInLeftBigOnEnter()`  */
export const FadeInLeftBigOnEnter = 
  fading_trigger(null!,
    'fadeInLeftBigOnEnter',
    ':enter',
    ['hidden', fadeInLeft()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '2000px'  });


/** fadeInUp Animation
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInUp = (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'fadeInUp',
    '0 => 1',
    ['hidden', fadeInUp_()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });
}
/** Note: to configure it use `fadeInUp()`  */
export const FadeInUp = 
  fading_trigger(null!,
    'fadeInUp',
    '0 => 1',
    ['hidden', fadeInUp_()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });


/** fadeInUpOnEnter Animation
 *  @param options * is a object/interface with values optional:
 ** { translate?: string | '200px' | '100%',
 **  anchor?: string | 'isNameAnimation',
 **  duration?: number | 1000 | 1s,
 **  delay?: number | 0 | 1,
 **  animateChildren?: 'before' | 'together' | 'after' | 'none' }*/
export const fadeInUpOnEnter= (options?: IFadingEntrancesAnimationOptions): AnimationTriggerMetadata => {
  return fading_trigger(options!,
    'fadeInUpOnEnter',
    ':enter',
    ['hidden', fadeInUp_()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });
}
/** Note: to configure it use `fadeInUpOnEnter()`  */
export const FadeInUpOnEnter= 
  fading_trigger(null!,
    'fadeInUpOnEnter',
    ':enter',
    ['hidden', fadeInUp_()],
    { delay: 0, duration: DEFAULT_DURATION, translateX: '100%'  });








/** FadeOutAnimation  *------------------------------------------------------------------------------- */
/** test */
export const fadeOut_animation = (options?: IAnimationOptions, selector = ':leave', duration = '200ms') => {
  return  trigger((options && options.anchor) || 'fadeInAnimation', [
    transition('* => *', [
      query(selector, [
        style({ opacity: 1 }),
        stagger('50ms', [
          animate(duration, style({ 
            opacity: 0
          }))
        ])
      ], {optional: true })
    ])
  ]);
}

















/************************************************************************************************ */
/**
 * fading-entrances:
 * @param options is interface of the type IFadingAnimationOptions,
 *  { anchor: <that will be used in a template>, duration: <Duration in ms>, delay: <Duration in ms>,
 *    animateChildren?: 'before' | 'together' | 'after' | 'none'; }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps [ styleVisibility, styleAnimation ] is array, with value 'hidden' | 'visible' and other type AnimationReferenceMetadata 
 * @param defaultValue is Object { delay: number, duration: number }m with {value 1 | 0, 1000 | 1s }
 */
function fading_trigger_noTranslate(options: IFadingEntrancesAnimationOptions,
                    nameTrigger: string,
                    transitionStateChangeExpr: '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement',
                    steps: [ styleVisibility: 'hidden' | 'visible', styleAnimation: AnimationReferenceMetadata ],
                    defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{
  return trigger((options && options.anchor) || nameTrigger , [
    transition( transitionStateChangeExpr , [style({ visibility: steps[0] }), ...useAnimationIncludingChildren( steps[1], options)], {
      params: {
        delay: (options && options.delay) || defaultValue.delay,
        duration: (options && options.duration) || defaultValue.duration
      }
    })
  ]);
}


/************************************************************************************************ */
/**
 * fading-entrances:
 * @param options is interface of the type IFadingAnimationOptions,
 *  { anchor: <that will be used in a template>, duration: <Duration in ms>, delay: <Duration in ms>,
 *    translate?: string | 2000px | 100%, animateChildren?: 'before' | 'together' | 'after' | 'none'; }
 * @param nameTrigger is type string, is name trigger * 
 * @param transitionStateChangeExpr is value '0 => 1' | '* => *' | ':enter' | ':leave' | ':increment' | ':decrement'
 * @param steps [ styleVisibility, styleAnimation ] is array, with value 'hidden' | 'visible' and other type AnimationReferenceMetadata 
 * @param defaultValue is Object { delay: number, duration: number, translateX: string }m with {value 1 | 0, 1000 | 1s , 2000px | 100% }
 */
function fading_trigger(options: IFadingEntrancesAnimationOptions,
                    nameTrigger: string,
                    transitionStateChangeExpr: '0 => 1' | '* => *' | '* <=> *' | ':enter' | ':leave' | ':increment' | ':decrement',
                    steps: [ styleVisibility: 'hidden' | 'visible', styleAnimation: AnimationReferenceMetadata ],
                    defaultValue: { delay: number, duration: number, translateX: string }  ): AnimationTriggerMetadata{
  return trigger((options && options.anchor) || nameTrigger , [
      transition( transitionStateChangeExpr , [style({ visibility: steps[0] }), ...useAnimationIncludingChildren( steps[1], options)], {
        params: {
          delay: (options && options.delay) || defaultValue.delay,
          duration: (options && options.duration) || defaultValue.duration,
          translate: (options && options.translate) || defaultValue.translateX
        }
      })
    ]);
}





