
export interface IAnimationOptions {
    /** Name of the animation anchor that will be used in a template */
    anchor?: string;
    /** Duration in ms     */
    duration?: number;
    /** Delay in ms.
     *  `Default: 0`  */
    delay?: number;
    /** This parameter can only be set in a component's decorator.
     * Cannot be set in a template.
     *
     * Whether children animation should run 'before', 'together' or 'after' animation.
     * When set to 'none' chldren are not animated.
     *
     * Default: 'together' */
    animateChildren?: 'before' | 'together' | 'after' | 'none';
  }
  
  export interface IAddDirectionAnimationOptions extends IAnimationOptions {
    /**
     * Indicates the direction of the state change expression in attention seekers.
     *
     * <=> is bidirectional (triggers whenever the state changes)
     * => unidirectional (triggers whenever the state changes from false to true)
     *
     * Cannot be dynamic
     */
    direction?: '<=>' | '=>';
  }
  
  export interface IAddTranslateAnimationOptions extends IAnimationOptions {
    /**
     * Translate, possible units: px, %, em, rem, vw, vh
     *
     * Default (fadeInDown, fadeInDownBig): 2000px, 
     * 
     * Default (fadeInLeft): -100%
     * 
     * *note: Do not use the symbol - or +
     */
    translate?: string;
  }
  export interface IAddScaleAnimationOptions extends IAnimationOptions {
    /**
     * Scale factor
     *
     * Default: 1.3
     */
    scale?: number;
  }
  
  export interface IAddDegreesAnimationOptions extends IAnimationOptions{
    /**
   * Angle - number of degrees from which to start animation.
     * min: 0 and max: 360
     *
     * Default: 90
     */
    degrees?: number;
  }
  export interface IAddDegreesTranslateAnimationOptions extends IAddTranslateAnimationOptions{
    /**
   * Angle - number of degrees from which to start animation.
     * min: 0 and max: 360
     *
     * Default: 90
     */
    degrees?: number;
  }

  export interface IAddScaleTranslateAnimationOptions extends IAddTranslateAnimationOptions {
    /**
     * Scale factor
     *
     * Default: 1.3
     */
    scale?: number;
  }

  export interface IAddScaleDirectionAnimationOptions extends IAddDirectionAnimationOptions {
    /**
     * Scale factor
     *
     * Default: 1.3
     */
    scale?: number;
  }

  export interface IAddTranslateDirectionAnimationOptions extends IAddDirectionAnimationOptions {
    /**
     * Shake size. Possible units: px, %, em, rem, vw, vh
     *
     * Default: 10px
     */
    translate?: string;
  }

  export interface IAllAnimationOptions extends IAnimationOptions{
    /**
     * Indicates the direction of the state change expression in attention seekers.
     *
     * <=> is bidirectional (triggers whenever the state changes)
     * => unidirectional (triggers whenever the state changes from false to true)
     *
     * Cannot be dynamic
     */
    direction?: '<=>' | '=>';
    /**
     * Shake size. Possible units: px, %, em, rem, vw, vh
     *
     * Default: 10px
     */
    translate?: string;
    /**
     * Scale factor
     *
     * Default: 1.3
     */
    scale?: number;
  }