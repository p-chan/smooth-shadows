export type CubicBezier = [number, number, number, number]

export type Easing = {
  name:
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
  cubicBezier: CubicBezier
}

/**
 * @see https://easings.net/
 */
const easings: Easing[] = [
  {
    name: 'easeInSine',
    cubicBezier: [0.12, 0, 0.39, 0],
  },
  {
    name: 'easeOutSine',
    cubicBezier: [0.61, 1, 0.88, 1],
  },
  {
    name: 'easeInOutSine',
    cubicBezier: [0.37, 0, 0.63, 1],
  },
  {
    name: 'easeInCubic',
    cubicBezier: [0.32, 0, 0.67, 0],
  },
  {
    name: 'easeOutCubic',
    cubicBezier: [0.33, 1, 0.68, 1],
  },
  {
    name: 'easeInOutCubic',
    cubicBezier: [0.65, 0, 0.35, 1],
  },
  {
    name: 'easeInQuint',
    cubicBezier: [0.64, 0, 0.78, 0],
  },
  {
    name: 'easeOutQuint',
    cubicBezier: [0.22, 1, 0.36, 1],
  },
  {
    name: 'easeInOutQuint',
    cubicBezier: [0.83, 0, 0.17, 1],
  },
  {
    name: 'easeInCirc',
    cubicBezier: [0.55, 0, 1, 0.45],
  },
  {
    name: 'easeOutCirc',
    cubicBezier: [0, 0.55, 0.45, 1],
  },
  {
    name: 'easeInOutCirc',
    cubicBezier: [0.85, 0, 0.15, 1],
  },
  {
    name: 'easeInQuad',
    cubicBezier: [0.11, 0, 0.5, 0],
  },
  {
    name: 'easeOutQuad',
    cubicBezier: [0.5, 1, 0.89, 1],
  },
  {
    name: 'easeInOutQuad',
    cubicBezier: [0.45, 0, 0.55, 1],
  },
  {
    name: 'easeInQuart',
    cubicBezier: [0.5, 0, 0.75, 0],
  },
  {
    name: 'easeOutQuart',
    cubicBezier: [0.25, 1, 0.5, 1],
  },
  {
    name: 'easeInOutQuart',
    cubicBezier: [0.76, 0, 0.24, 1],
  },
  {
    name: 'easeInExpo',
    cubicBezier: [0.7, 0, 0.84, 0],
  },
  {
    name: 'easeOutExpo',
    cubicBezier: [0.16, 1, 0.3, 1],
  },
  {
    name: 'easeInOutExpo',
    cubicBezier: [0.87, 0, 0.13, 1],
  },
  {
    name: 'easeInBack',
    cubicBezier: [0.36, 0, 0.66, -0.56],
  },
  {
    name: 'easeOutBack',
    cubicBezier: [0.34, 1.56, 0.64, 1],
  },
  {
    name: 'easeInOutBack',
    cubicBezier: [0.68, -0.6, 0.32, 1.6],
  },
]

export const easingToCubicBezier = (name: Easing['name']): CubicBezier => {
  const easing = easings.find((easing) => {
    return easing.name === name
  })

  if (easing == undefined) return [0, 0, 1, 1]

  return easing.cubicBezier
}
