import BezierEasing from 'bezier-easing'
import parseUnit from 'parse-unit'
import roundTo from 'round-to'

import { CubicBezier, Easing, easingToCubicBezier } from './easings'

type Options = Partial<{
  layers: number
  easings: Partial<{
    offset: Easing['name'] | CubicBezier
    blur: Easing['name'] | CubicBezier
    alpha: Easing['name'] | CubicBezier
  }>
  output: 'css' | 'js'
}>

export const smoothShadows = (
  x: 0 | string,
  y: 0 | string,
  blur: 0 | string,
  spread: 0 | string,
  color: [number, number, number, number],
  options?: Options
) => {
  const [xValue, xUnit] = typeof x === 'string' ? parseUnit(x) : [x]
  const [yValue, yUnit] = typeof y === 'string' ? parseUnit(y) : [y]
  const [blurValue, blurUnit] = typeof blur === 'string' ? parseUnit(blur) : [blur]
  const [spreadValue, spreadUnit] = typeof spread === 'string' ? parseUnit(spread) : [spread]
  const [redValue, greenValue, blueValue, alphaValue] = color

  const layers = (options && options.layers) || 4
  const easings = {
    offset: options?.easings?.offset || 'easeInExpo',
    blur: options?.easings?.blur || 'easeInQuint',
    alpha: options?.easings?.alpha || 'easeInOutQuad',
  }
  const output = (options && options.output) || 'js'

  const offsetBezierEasing = BezierEasing(
    ...(typeof easings.offset === 'string' ? easingToCubicBezier(easings.offset) : easings.offset)
  )
  const blurBezierEasing = BezierEasing(
    ...(typeof easings.blur === 'string' ? easingToCubicBezier(easings.blur) : easings.blur)
  )
  const alphaBezierEasing = BezierEasing(
    ...(typeof easings.alpha === 'string' ? easingToCubicBezier(easings.alpha) : easings.alpha)
  )

  const shadows = [...Array(layers)].map((_, index) => {
    const progress = (index + 1) / layers

    return {
      x: xValue !== 0 ? `${roundTo(offsetBezierEasing(progress) * xValue, 3)}${xUnit}` : 0,
      y: yValue !== 0 ? `${roundTo(offsetBezierEasing(progress) * yValue, 3)}${yUnit}` : 0,
      blur: blurValue !== 0 ? `${roundTo(blurBezierEasing(progress) * blurValue, 3)}${blurUnit}` : 0,
      spread: spreadValue !== 0 ? `${roundTo(spreadValue, 3)}${spreadUnit}` : 0,
      color: {
        red: redValue,
        green: greenValue,
        blue: blueValue,
        alpha: roundTo(alphaBezierEasing(progress) * alphaValue, 3),
      },
    }
  })

  if (output === 'css') {
    return shadows
      .map((shadow) => {
        return `${shadow.x} ${shadow.y} ${shadow.blur}${shadow.spread ? ` ${shadow.spread}` : ''} rgba(${
          shadow.color.red
        }, ${shadow.color.green}, ${shadow.color.blue}, ${shadow.color.alpha})`
      })
      .join(', ')
  }

  return shadows
}
