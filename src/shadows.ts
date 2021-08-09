import BezierEasing from 'bezier-easing'
import parseUnit from 'parse-unit'
import roundTo from 'round-to'

import { CubicBezier, Easing, easingToCubicBezier } from './easings'

export type CSSLength = string | 0
export type CSSColorRGBA = [number, number, number, number]

export type SmoothShadowsArray = [CSSLength, CSSLength, CSSLength, CSSLength, CSSColorRGBA]
export type SmoothShadowsObject = {
  x: CSSLength
  y: CSSLength
  blur: CSSLength
  spread: CSSLength
  color: {
    red: number
    green: number
    blue: number
    alpha: number
  }
}
export type SmoothShadowsCSS = string

export type LayersOption = number
export type EasingsOption = Partial<{
  offset: Easing['name'] | CubicBezier
  blur: Easing['name'] | CubicBezier
  alpha: Easing['name'] | CubicBezier
}>
export type OutputOption = 'array' | 'object' | 'css'

function smoothShadows(
  x: CSSLength,
  y: CSSLength,
  blur: CSSLength,
  spread: CSSLength,
  color: CSSColorRGBA,
  options?: Partial<{ layers: LayersOption; easings: EasingsOption; output: 'array' }>
): SmoothShadowsArray[]

function smoothShadows(
  x: CSSLength,
  y: CSSLength,
  blur: CSSLength,
  spread: CSSLength,
  color: CSSColorRGBA,
  options?: Partial<{ layers: LayersOption; easings: EasingsOption; output: 'object' }>
): SmoothShadowsObject[]

function smoothShadows(
  x: CSSLength,
  y: CSSLength,
  blur: CSSLength,
  spread: CSSLength,
  color: CSSColorRGBA,
  options?: Partial<{ layers: LayersOption; easings: EasingsOption; output: 'css' }>
): SmoothShadowsCSS

function smoothShadows(
  x: CSSLength,
  y: CSSLength,
  blur: CSSLength,
  spread: CSSLength,
  color: CSSColorRGBA,
  options?: Partial<{ layers: LayersOption; easings: EasingsOption; output: OutputOption }>
): SmoothShadowsArray[] | SmoothShadowsObject[] | SmoothShadowsCSS {
  const [xValue, xUnit] = typeof x === 'string' ? parseUnit(x) : [x]
  const [yValue, yUnit] = typeof y === 'string' ? parseUnit(y) : [y]
  const [blurValue, blurUnit] = typeof blur === 'string' ? parseUnit(blur) : [blur]
  const [spreadValue, spreadUnit] = typeof spread === 'string' ? parseUnit(spread) : [spread]
  const [redValue, greenValue, blueValue, alphaValue] = color

  const layers = (options && options.layers) || 4
  const easings = {
    offset: options?.easings?.offset || [0.65, 0.1, 0.9, 0.4],
    blur: options?.easings?.blur || [0.65, 0.2, 0.9, 0.4],
    alpha: options?.easings?.alpha || [0.2, 0.6, 0.9, 0.4],
  }
  const output = (options && options.output) || 'array'

  const offsetBezierEasing = BezierEasing(
    ...(typeof easings.offset === 'string' ? easingToCubicBezier(easings.offset) : easings.offset)
  )
  const blurBezierEasing = BezierEasing(
    ...(typeof easings.blur === 'string' ? easingToCubicBezier(easings.blur) : easings.blur)
  )
  const alphaBezierEasing = BezierEasing(
    ...(typeof easings.alpha === 'string' ? easingToCubicBezier(easings.alpha) : easings.alpha)
  )

  const shadows: SmoothShadowsObject[] = [...Array(layers)].map((_, index) => {
    const progress = (index + 1) / layers

    return {
      x: xValue !== 0 ? `${roundTo(offsetBezierEasing(progress) * xValue, 3)}${xUnit}` : (0 as const),
      y: yValue !== 0 ? `${roundTo(offsetBezierEasing(progress) * yValue, 3)}${yUnit}` : (0 as const),
      blur: blurValue !== 0 ? `${roundTo(blurBezierEasing(progress) * blurValue, 3)}${blurUnit}` : (0 as const),
      spread: spreadValue !== 0 ? `${roundTo(spreadValue, 3)}${spreadUnit}` : (0 as const),
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

  if (output === 'object') return shadows

  return shadows.map(({ x, y, blur, spread, color }) => {
    return [x, y, blur, spread, [color.red, color.green, color.blue, color.alpha]]
  })
}

export { smoothShadows }
