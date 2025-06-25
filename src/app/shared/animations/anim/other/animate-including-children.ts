import { animate, animateChild, group, query } from '@angular/animations';

import { IAnimationOptions } from '../../models/animation.model';

export function animateIncludingChildren(easing: 'ease-in' | 'ease-out', options?: IAnimationOptions) {
  return [
    ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
    group([
      group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + easing)]),
      ...(!options || !options.animateChildren || options.animateChildren === 'together'
        ? [query('@*', animateChild(), { optional: true })]
        : [])
    ]),
    ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
  ];
}