
import { trigger, stagger, transition, state, style, animate, keyframes, query, animateChild, group } from '@angular/animations';

/** grow **************************************************************************************** */

//basic grow animation!
export const grow = trigger('grow', [
  state('no', style({ transform: 'scale(1)' })),
  state('yes', style({ transform: 'scale(1.4)' })),
  transition('* => *', animate('200ms ease-in'))
]);

export const grow1 = trigger('grow1' , [
    state('small', style({ transform: 'scale(1)' })),
    state('large', style({ transform: 'scale(1.4)' })),
    transition('small => large', animate('200ms ease-in')),
    transition('large => small', animate('200ms ease-out'))
]);

export const grow2 = (duration = 200, easing = 'linear') => {
  return trigger('grow2', [
    state('no', style({ transform: 'scale(1)' })),
    state('yes', style({ transform: 'scale(1.4)' })),
    //you can define your own duration for the animation by using line 13
    transition('* => *', animate(`${duration}ms ${easing}`))
  ]);
};



/** slide *************************************************************************************** */

export const slide = trigger('slide', [
  state('in', style({ transform: 'translate3d(0, 0, 0)' })),
  state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
  transition('in => out', animate('200ms ease-in')),
  transition('out => in', animate('200ms ease-out'))
]);


/** fade **************************************************************************************** */
export const fade = trigger('fade', [
  state('no', style({ opacity: 1 })),
  state('yes', style({ opacity: 0.1 })),
  transition('* => *', animate('2000ms linear'))
]);

export const fade2 = trigger('fade2', [
    state('visible', style({ opacity: 1 })),
    state('invisible', style({ opacity: 0.1 })),
    transition('visible <=> invisible', animate('2000ms linear'))
]);


/** flyIn and flyInOut ************************************************************************** */
export const flyInOut = trigger('flyInOut', [
    state('in', style({ transform: 'translate3d(0, 0, 0)' })),
    state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
    transition('in => out', animate('200ms ease-in')),
    transition('out => in', animate('200ms ease-out'))
]);

export const flyIn = trigger( 'flyIn' , [
    state('*', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
            animate(500)
    ]),
    transition('* => void', [
        animate(100, style ({ transform: 'translateX(500%)'}))
    ])
]);
