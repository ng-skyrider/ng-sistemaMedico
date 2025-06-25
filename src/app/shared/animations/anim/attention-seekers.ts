
import { trigger, stagger, transition, state, style, animate, keyframes, query,
  animateChild, group, animation, AnimationTriggerMetadata, AnimationStyleMetadata, AnimationMetadata, AnimationReferenceMetadata,
  AUTO_STYLE, 
  AnimationMetadataType} from '@angular/animations';


import { IAnimationOptions, 
        IAddTranslateAnimationOptions,
        IAddDirectionAnimationOptions,
        IAddScaleAnimationOptions,
        IAddTranslateDirectionAnimationOptions,
        IAddScaleDirectionAnimationOptions, } from '../models/animation.model';
import { useAnimationIncludingChildren } from './use-animation-including-children';

const bounce = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE,
              transform: 'translate3d(0, 0, 0)',     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
      style({ transform: 'translate3d(0, 0, 0)',     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
      style({ transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4 }),
      style({ transform: 'translate3d(0, -30px, 0)', easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.43 }),
      style({ transform: 'translate3d(0, 0, 0)',     easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.53 }),
      style({ transform: 'translate3d(0, -15px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.7 }),
      style({ transform: 'translate3d(0, 0, 0)',     easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.8 }),
      style({ transform: 'translate3d(0, -4px, 0)',  easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)',     easing: 'ease', offset: 1 })
    ])
  )
]);

const flash = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              opacity: 1, easing: 'ease', offset: 0 }),
      style({ opacity: 0, easing: 'ease', offset: 0.25 }),
      style({ opacity: 1, easing: 'ease', offset: 0.5 }),
      style({ opacity: 0, easing: 'ease', offset: 0.75 }),
      style({ opacity: 1, easing: 'ease', offset: 1 })
    ])
  )
]);

const headShake = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'translateX(0)',                   easing: 'ease-in-out', offset: 0 }),
      style({ transform: 'translateX(-6px) rotateY(-9deg)', easing: 'ease-in-out', offset: 0.065 }),
      style({ transform: 'translateX(5px) rotateY(7deg)',   easing: 'ease-in-out', offset: 0.185 }),
      style({ transform: 'translateX(-3px) rotateY(-5deg)', easing: 'ease-in-out', offset: 0.315 }),
      style({ transform: 'translateX(2px) rotateY(3deg)',   easing: 'ease-in-out', offset: 0.435 }),
      style({ transform: 'translateX(0)',                   easing: 'ease-in-out', offset: 0.5 })
    ])
  )
]);

const heartBeat = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE,
              transform: 'scale(1)',         easing: 'ease-in-out', offset: 0 }),
      style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
      style({ transform: 'scale(1)',         easing: 'ease-in-out', offset: 0.28 }),
      style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
      style({ transform: 'scale(1)',         easing: 'ease-in-out', offset: 0.7 })
    ])
  )
]);

const jello = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'translate3d(0, 0, 0)',                      easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(0, 0, 0)',                      easing: 'ease', offset: 0.111 }),
      style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)',           easing: 'ease', offset: 0.222 }),
      style({ transform: 'skewX(6.25deg) skewY(6.25deg)',             easing: 'ease', offset: 0.333 }),
      style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)',         easing: 'ease', offset: 0.444 }),
      style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)',         easing: 'ease', offset: 0.555 }),
      style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',     easing: 'ease', offset: 0.666 }),
      style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)',     easing: 'ease', offset: 0.777 }),
      style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', easing: 'ease', offset: 0.888 }),
      style({ transform: 'skewX(0deg) skewY(0deg)',                   easing: 'ease', offset: 1 })
    ])
  )
]);

const pulse = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'scale3d(1, 1, 1)',                         easing: 'ease', offset: 0 }),
      style({ transform: 'scale3d({{scale}}, {{scale}}, {{scale}})', easing: 'ease', offset: 0.5 }),
      style({ transform: 'scale3d(1, 1, 1)',                         easing: 'ease', offset: 1 })
    ])
  )
]);

const rubberBand = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'scale3d(1, 1, 1)',       easing: 'ease', offset: 0 }),
      style({ transform: 'scale3d(1.25, 0.75, 1)', easing: 'ease', offset: 0.3 }),
      style({ transform: 'scale3d(0.75, 1.25, 1)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'scale3d(1.15, 0.85, 1)', easing: 'ease', offset: 0.5 }),
      style({ transform: 'scale3d(0.95, 1.05, 1)', easing: 'ease', offset: 0.65 }),
      style({ transform: 'scale3d(1.05, 0.95, 1)', easing: 'ease', offset: 0.75 }),
      style({ transform: 'scale3d(1, 1, 1)',       easing: 'ease', offset: 1 })
    ])
  )
]);

const shake = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'translate3d(0, 0, 0)',              easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.1 }),
      style({ transform: 'translate3d({{translate}},  0, 0)', easing: 'ease', offset: 0.2 }),
      style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.3 }),
      style({ transform: 'translate3d({{translate}},  0, 0)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.5 }),
      style({ transform: 'translate3d({{translate}},  0, 0)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.7 }),
      style({ transform: 'translate3d({{translate}},  0, 0)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)',              easing: 'ease', offset: 1 })
    ])
  )
]);
/** shakeX: is animation default */
const shakeX = shake;
/** shakeY: is animation translate3d(0, translateY, 0 ) */
const shakeY = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'translate3d(0, 0, 0)',              easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0.1 }),
      style({ transform: 'translate3d(0, {{translate}},  0)', easing: 'ease', offset: 0.2 }),
      style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0.3 }),
      style({ transform: 'translate3d(0, {{translate}},  0)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0.5 }),
      style({ transform: 'translate3d(0, {{translate}},  0)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0.7 }),
      style({ transform: 'translate3d(0, {{translate}},  0)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)',              easing: 'ease', offset: 1 })
    ])
  )
]);

const swing = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ 'transform-origin': 'top center', offset: 0 }),
      style({ visibility: AUTO_STYLE, 
              transform: 'rotate3d(0, 0, 1, 0deg)',   easing: 'ease', offset: 0 }),
      style({ transform: 'rotate3d(0, 0, 1, 15deg)',  easing: 'ease', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)',   easing: 'ease', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)',  easing: 'ease', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)',   easing: 'ease', offset: 1 })
    ])
  )
]);

const tada = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'scale3d(1, 1, 1)',                                easing: 'ease', offset: 0 }),
      style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.1 }),
      style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.2 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',  easing: 'ease', offset: 0.3 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',  easing: 'ease', offset: 0.5 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',  easing: 'ease', offset: 0.7 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',  easing: 'ease', offset: 0.9 }),
      style({ transform: 'scale3d(1, 1, 1)',                                easing: 'ease', offset: 1 })
    ])
  )
]);

const wobble = () =>
animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: AUTO_STYLE, 
              transform: 'translate3d(0, 0, 0)',                             easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.15 }),
      style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',   easing: 'ease', offset: 0.3 }),
      style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.45 }),
      style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',   easing: 'ease', offset: 0.6 }),
      style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',  easing: 'ease', offset: 0.75 }),
      style({ transform: 'translate3d(0, 0, 0)',                             easing: 'ease', offset: 1 })
    ])
  )
]);




const DEFAULT_DURATION = 1000;
const DEFAULT_DURATION_1 = 1300;
const DEFAULT_SCALE = 1.3;





















/**
* 
* @param nameTrigger is accepted string values:
** 'bounce'
** 'flash'
** 'headShake'
** 'heartBeat'
** 'jello'
** 'pulse'
** 'rubberBand'
** 'shake'
** 'shakeX'
** 'shakeY'
** 'swing'
** 'tada'
** 'wobble'
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
export const attentionSeekers = (
  nameTrigger:
  'bounce' | 
  'flash' | 
  'headShake' | 
  'heartBeat' | 
  'jello' | 
  'pulse' | 
  'rubberBand' | 
  'shake' | 
  'shakeX' | 
  'shakeY' | 
  'swing' | 
  'tada' | 
  'wobble' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
  styleCSS?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
  styleAnimation?: AnimationReferenceMetadata,
  options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata | any => {

let defectTranslate: string = '10px';
let defectScale: number = 0;

switch (nameTrigger) {
case 'bounce': transitionState = '0 <=> 1'; styleCSS = { 'transform-origin': 'center bottom' }; styleAnimation = bounce(); noT=true; noS=true; break;
case 'flash': transitionState = '0 <=> 1'; styleCSS = {};  styleAnimation = flash(); noT=true; noS=true; break;
case 'headShake': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = headShake(); noT=true; noS=true; break;
case 'heartBeat': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = heartBeat(); defectScale = 0.25;  noT=true; noS=false; break;
case 'jello': transitionState = '0 <=> 1'; styleCSS = { 'transform-origin': 'center' }; styleAnimation = jello(); noT=true; noS=true; break;
case 'pulse': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = pulse(); defectScale = 0.25; noT=true; noS=false; break;
case 'rubberBand': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = rubberBand(); noT=true; noS=true; break;
case 'shake': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = shake(); defectTranslate = '10px'; noT=false; noS=true; break;
case 'shakeX': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = shakeX(); defectTranslate = '10px'; noT=false; noS=true; break;
case 'shakeY': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = shakeY(); defectTranslate = '10px'; noT=false; noS=true; break;
case 'swing': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = swing(); noT=true; noS=true; break;
case 'tada': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = tada(); noT=true; noS=true; break;
case 'wobble': transitionState = '0 <=> 1'; styleCSS = {}; styleAnimation = wobble(); noT=true; noS=true; break;
  default:
}

  if(noT && noS){
    return attention_seekers_noTranslate_noScale(options!,
              nameTrigger,
              transitionState!,
            [ styleCSS!, styleAnimation!],
            { delay: 0, duration: DEFAULT_DURATION });
  }else if(noT && !noS){
    return attention_seekers_noTranslate(options!,
              nameTrigger,
              transitionState!,
            [ styleCSS!, styleAnimation!],
            { delay: 0, duration: DEFAULT_DURATION, scale: DEFAULT_SCALE - defectScale });
  }else if(!noT && noS){
    return attention_seekers_noScale(options!,
              nameTrigger,
              transitionState!,
            [ styleCSS!, styleAnimation!],
            { delay: 0, duration: DEFAULT_DURATION, translateX: defectTranslate });
  }else if(!noT && !noS){
    console.log("Error se introdujo datos erróneos o no existe un Scale y Translate");
  }
  // else{
  //   console.log("Error se introdujo datos erroneos o no se mensionó si existe Scale o Translate");
  // }

}

/**
* 
* @param nameTrigger is accepted string values:
** 'bounce'
** 'flash'
** 'headShake'
** 'heartBeat'
** 'jello'
** 'pulse'
** 'rubberBand'
** 'shake'
** 'shakeX'
** 'shakeY'
** 'swing'
** 'tada'
** 'wobble'
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
export const attentionSeekersOnEnter = (
nameTrigger:
'bounce' | 
'flash' | 
'headShake' | 
'heartBeat' | 
'jello' | 
'pulse' | 
'rubberBand' | 
'shake' | 
'shakeX' | 
'shakeY' | 
'swing' | 
'tada' | 
'wobble' , transitionState?: string, // '0 => 1' || '* => *' || ':enter' || ':leave' || ':increment' || ':decrement'
styleCSS1?: { [key: string]: string | number;}, //  { visibility: 'hidden' }
styleCSS2?: { [key: string]: string | number;}, //  { visibility: 'hidden' }  
styleAnimation?: AnimationReferenceMetadata,
options?: IAnimationOptions, noT?: boolean, noS?: boolean ): AnimationTriggerMetadata | any => {

  let defectTranslate: string = '10px';
  let defectScale: number = 0;

switch (nameTrigger) {
case 'bounce': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2= { 'transform-origin': 'center bottom' }; styleAnimation = bounce();  noT=true; noS=true; break;
case 'flash': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = flash();  noT=true; noS=true; break;
case 'headShake': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = headShake();  noT=true; noS=true; break;
case 'heartBeat': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = heartBeat(); defectScale = 0.25;  noT=true; noS=false; break;
case 'jello': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'center' }; styleAnimation = jello();  noT=true; noS=true; break;
case 'pulse': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = pulse(); defectScale = 0.25; noT=true; noS=false; break;
case 'rubberBand': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = rubberBand();  noT=true; noS=true; break;
case 'shake': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = shake(); defectTranslate = '10px';  noT=false; noS=true; break;
case 'shakeX': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = shakeX(); defectTranslate = '10px'; noT=false; noS=true; break;
case 'shakeY': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = shakeY(); defectTranslate = '10px'; noT=false; noS=true; break;
case 'swing': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = { 'transform-origin': 'top center' }; styleAnimation = swing();  noT=true; noS=true; break;
case 'tada': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = tada();  noT=true; noS=true; break;
case 'wobble': transitionState = ':enter'; styleCSS1 = { visibility: 'hidden' }; styleCSS2 = {}; styleAnimation = wobble();  noT=true; noS=true; break;
default:
}

if(noT && noS){
  return attention_seekers_onEnter_noTranslate_noScale(options!,
            nameTrigger,
            transitionState!,
          [ styleCSS1!, styleCSS2!, styleAnimation!],
          { delay: 0, duration: DEFAULT_DURATION });
}else if(noT && !noS){
  return attention_seekers_onEnter_noTranslate(options!,
            nameTrigger,
            transitionState!,
          [ styleCSS1!, styleAnimation!],
          { delay: 0, duration: DEFAULT_DURATION, scale: DEFAULT_SCALE - defectScale });
}else if(!noT && noS){
  return attention_seekers_onEnter_noScale(options!,
            nameTrigger,
            transitionState!,
          [ styleCSS1!, styleAnimation!],
          { delay: 0, duration: DEFAULT_DURATION, translateX: defectTranslate });
}else if(!noT && !noS){
  console.log("Error se introdujo datos erróneos o no existe un Scale y Translate");
}
// else{
//   console.log("Error se introdujo datos erroneos o no se mensionó si existe Scale o Translate");
// }


}






















/************************************************************************************************ */
/**
* attention_seekers:
* @param options is interface of the type IAttentionSeekerAnimationOptions,
** { anchor?: // that will be used in a template or CualquierNameTemplate ,
**   duration?: <Duration in ms>,
**   delay: <Duration in ms>,
**   animateChildren?: 'before' | 'together' | 'after' | 'none',
**   direction?: '<=>' | '=>' }
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
export function attention_seekers_noTranslate_noScale(
  options: IAddDirectionAnimationOptions,
  nameTrigger: string,
  transitionStateChangeExpr: string,
  steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
  defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{

  return trigger((options && options.anchor) || nameTrigger , [
      transition( transitionStateChangeExpr || `0 ${(options && options.direction) || '<=>'} 1` ,
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
**   animateChildren?: 'before' | 'together' | 'after' | 'none'}
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
export function attention_seekers_onEnter_noTranslate_noScale(
  options: IAnimationOptions,
  nameTrigger: string,
  transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
  steps: [ styleCSS1: { [key: string]: string | number;}, styleCSS2: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
  defaultValue: { delay: number, duration: number }  ): AnimationTriggerMetadata{

  return trigger((options && options.anchor) || nameTrigger , [
      transition( transitionStateChangeExpr || ':enter' ,
       [
          style( steps[0] ), style( steps[1] ), ...useAnimationIncludingChildren( steps[2], options)], {
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
**   scale?: number | 1.3 }
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
export function attention_seekers_noTranslate(
options: IAddScaleDirectionAnimationOptions,
nameTrigger: string,
transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
defaultValue: { delay: number, duration: number, scale: number }  ): AnimationTriggerMetadata{

return trigger((options && options.anchor) || nameTrigger , [
    transition( transitionStateChangeExpr || `0 ${(options && options.direction) || '<=>'} 1` ,
     [
        style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
        params: {
            delay: (options && options.delay) || defaultValue.delay,
            duration: (options && options.duration) || defaultValue.duration,
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
**   scale?: number | 1.3 }
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
export function attention_seekers_onEnter_noTranslate(
options: IAddScaleAnimationOptions,
nameTrigger: string,
transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
defaultValue: { delay: number, duration: number, scale: number }  ): AnimationTriggerMetadata{

return trigger((options && options.anchor) || nameTrigger , [
    transition( transitionStateChangeExpr || ':enter' ,
     [
        style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
        params: {
            delay: (options && options.delay) || defaultValue.delay,
            duration: (options && options.duration) || defaultValue.duration,
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
export function attention_seekers_noScale(
options: IAddTranslateDirectionAnimationOptions,
nameTrigger: string,
transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
defaultValue: { delay: number, duration: number, translateX: string  }  ): AnimationTriggerMetadata{

return trigger((options && options.anchor) || nameTrigger , [
    transition( transitionStateChangeExpr || `0 ${(options && options.direction) || '<=>'} 1` ,
     [
        style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
        params: {
            delay: (options && options.delay) || defaultValue.delay,
            duration: (options && options.duration) || defaultValue.duration,
            translate: (options && options.translate) || defaultValue.translateX
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
export function attention_seekers_onEnter_noScale(
options: IAddTranslateAnimationOptions,
nameTrigger: string,
transitionStateChangeExpr: string, //'0 => 1' | '0 <=> 1' | ':enter',
steps: [ styleCSS: { [key: string]: string | number;},   styleAnimation: AnimationReferenceMetadata ],
defaultValue: { delay: number, duration: number, translateX: string  }  ): AnimationTriggerMetadata{

return trigger((options && options.anchor) || nameTrigger , [
    transition( transitionStateChangeExpr || ':enter' ,
     [
        style( steps[0] ), ...useAnimationIncludingChildren( steps[1], options)], {
        params: {
            delay: (options && options.delay) || defaultValue.delay,
            duration: (options && options.duration) || defaultValue.duration,
            translate: (options && options.translate) || defaultValue.translateX
        }
    })
]);
}

