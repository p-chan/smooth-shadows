# smooth-shadows

> A library to generate smooth shadows with multiple layers

## Install

```sh
npm install smooth-shadows
```

or

```sh
yarn add smooth-shadows
```

## Usage

```ts
import { smoothShadows } from 'smooth-shadows'

const shadows = smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08])

console.log(shadows)
/*
[
  [ 0, '0.216px', '1.361px', 0, [ 0, 0, 0, 0.027 ] ],
  [ 0, '0.622px', '3.197px', 0, [ 0, 0, 0, 0.039 ] ],
  [ 0, '1.447px', '6.325px', 0, [ 0, 0, 0, 0.049 ] ],
  [ 0, '4px', '16px', 0, [ 0, 0, 0, 0.08 ] ]
]
*/
```

## API

```ts
smoothShadows(x, y, blur, spread, color, options)
```

### Parameters

- `x`: offset x
  - Type: `string | 0`
- `y`: offset y
  - Type: `string | 0`
- `blur`: blur radius
  - Type: `string | 0`
- `spread`: spread radius
  - Type: `string | 0`
- `color`: rgba
  - Type: `[number, number, number, number]`
- `options` (optional)
  - `layers` (optional): number of layers
    - Type: `number`
    - Default: `4`
  - `easings` (optional):
    - `offset` (optional): easing of `x` and `y`, specify [easing functions](https://easings.net/) or [cubic-bezier](https://cubic-bezier.com/)
      - Type: `string | [number, number, number, number]`
      - Default: [`[0.65, 0.1, 0.9, 0.4]`](https://cubic-bezier.com/#.65,.1,.9,.4)
    - `blur` (optional): easing of blur, specify [easing functions](https://easings.net/) or [cubic-bezier](https://cubic-bezier.com/)
      - Type: `string | [number, number, number, number]`
      - Default: [`[0.65, 0.2, 0.9, 0.4]`](https://cubic-bezier.com/#.65,.2,.9,.4)
    - `alpha` (optional): easing of alpha, specify [easing functions](https://easings.net/) or [cubic-bezier](https://cubic-bezier.com/)
      - Type: `string | [number, number, number, number]`
      - Default: [`[0.2, 0.6, 0.9, 0.4]`](https://cubic-bezier.com/#.2,.6,.9,.4)
  - `output` (optional): return values
    - Type: `'array' | 'object' | 'css'`
    - Default: `'array'`

### Return values

Depends on the value of the output option.

<h4 id="api-return-values-array"><code>array</code> (default)</h4>

```json
[
  [0, "0.216px", "1.361px", 0, [0, 0, 0, 0.027]],
  [0, "0.622px", "3.197px", 0, [0, 0, 0, 0.039]],
  [0, "1.447px", "6.325px", 0, [0, 0, 0, 0.049]],
  [0, "4px", "16px", 0, [0, 0, 0, 0.08]]
]
```

<h4 id="api-return-values-object"><code>object</code></h4>

```json
[
  {
    "x": 0,
    "y": "0.216px",
    "blur": "1.361px",
    "spread": 0,
    "color": { "red": 0, "green": 0, "blue": 0, "alpha": 0.027 }
  },
  {
    "x": 0,
    "y": "0.622px",
    "blur": "3.197px",
    "spread": 0,
    "color": { "red": 0, "green": 0, "blue": 0, "alpha": 0.039 }
  },
  {
    "x": 0,
    "y": "1.447px",
    "blur": "6.325px",
    "spread": 0,
    "color": { "red": 0, "green": 0, "blue": 0, "alpha": 0.049 }
  },
  {
    "x": 0,
    "y": "4px",
    "blur": "16px",
    "spread": 0,
    "color": { "red": 0, "green": 0, "blue": 0, "alpha": 0.08 }
  }
]
```

<h4 id="api-return-values-css"><code>css</code></h4>

```txt
0 0.216px 1.361px rgba(0, 0, 0, 0.027), 0 0.622px 3.197px rgba(0, 0, 0, 0.039), 0 1.447px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)
```

## Examples

### Increase layers

```ts
const shadows = smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { layers: 8 })

console.log(shadows.length) //=> 8
```

### Decrease layers

```ts
const shadows = smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { layers: 2 })

console.log(shadows.length) //=> 2
```

### Specify easing with easing functions

Can be specify the easing function of [easings.net](https://easings.net/). (But, cannot specify `ease*Elastic` and `ease*Bounce`)

```ts
smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], {
  easings: { offset: 'easeInExpo', blur: 'easeInQuart', alpha: 'easeInOutCirc' },
})
```

</details>

### Specify easing with cubic-bezier

Can be specify cubic-bezier, which was created by [cubic-bezier.com](https://cubic-bezier.com/).

```ts
smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], {
  easings: { offset: [0.65, 0.1, 0.9, 0.4], blur: [0.65, 0.2, 0.9, 0.4], alpha: [0.2, 0.6, 0.9, 0.4] },
})
```

### Output array

```ts
smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { output: 'array' })
```

[Return values](#api-return-values-array)

### Output object

```ts
smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { output: 'object' })
```

[Return values](#api-return-values-object)

### Output CSS

```ts
smoothShadows(0, '16px', '24px', 0, [0, 0, 0, 0.08], { output: 'css' })
```

[Return values](#api-return-values-css)

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
