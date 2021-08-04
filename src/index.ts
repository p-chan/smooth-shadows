import BezierEasing from 'bezier-easing'
import parseUnit from 'parse-unit'
import roundTo from 'round-to'

import { CubicBezier, Easing, easingToCubicBezier } from './easings'

type Arguments = {
  layers: number
  alpha:
    | number
    | {
        value: number
        easing?: Easing['name'] | CubicBezier
      }
  offset:
    | string
    | {
        value: number
        unit: string
        easing?: Easing['name'] | CubicBezier
      }
  blur:
    | string
    | {
        value: number
        unit: string
        easing?: Easing['name'] | CubicBezier
      }
  output?: 'css'
}

export const smoothShadows = ({ layers, alpha, offset, blur, output }: Arguments) => {
  const alphaDefaultEasing = 'easeInOutQuad'
  const offsetDefaultEasing = 'easeInExpo'
  const blurDefaultEasing = 'easeInQuint'

  const alphaValue = typeof alpha === 'number' ? alpha : alpha.value
  const [offsetValue, offsetUnit] = typeof offset === 'string' ? parseUnit(offset) : [offset.value, offset.unit]
  const [blurValue, blurUnit] = typeof blur === 'string' ? parseUnit(blur) : [blur.value, blur.unit]

  const alphaEasing = typeof alpha === 'number' ? alphaDefaultEasing : alpha.easing || alphaDefaultEasing
  const offsetEasing = typeof offset === 'string' ? offsetDefaultEasing : offset.easing || offsetDefaultEasing
  const blurEasing = typeof blur === 'string' ? blurDefaultEasing : blur.easing || blurDefaultEasing

  const alphaCubicBezier = typeof alphaEasing === 'string' ? easingToCubicBezier(alphaEasing) : alphaEasing
  const offsetCubicBezier = typeof offsetEasing === 'string' ? easingToCubicBezier(offsetEasing) : offsetEasing
  const blurCubicBezier = typeof blurEasing === 'string' ? easingToCubicBezier(blurEasing) : blurEasing

  const alphaBezierEasing = BezierEasing(...alphaCubicBezier)
  const offsetBezierEasing = BezierEasing(...offsetCubicBezier)
  const blurBezierEasing = BezierEasing(...blurCubicBezier)

  const shadows = [...Array(layers)].map((_, index) => {
    const progress = (index + 1) / layers

    return {
      alpha: roundTo(alphaBezierEasing(progress) * alphaValue, 3),
      offset: `${roundTo(offsetBezierEasing(progress) * offsetValue, 3)}${offsetUnit}`,
      blur: `${roundTo(blurBezierEasing(progress) * blurValue, 3)}${blurUnit}`,
    }
  })

  if (output === 'css') {
    return shadows
      .map((shadow) => {
        return `0 ${shadow.offset} ${shadow.blur} rgba(0, 0, 0, ${shadow.alpha})`
      })
      .join(', ')
  }

  return shadows
}
