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
      - Default: [`[0.2, 0.6, 0.9, 0.4]`](https://cubic-bezier.com/#.2,.6,.9,.4)
    - `blur` (optional): easing of blur, specify [easing functions](https://easings.net/) or [cubic-bezier](https://cubic-bezier.com/)
      - Type: `string | [number, number, number, number]`
      - Default: [`[0.65, 0.2, 0.9, 0.4]`](https://cubic-bezier.com/#.65,.2,.9,.4)
    - `alpha` (optional): easing of alpha, specify [easing functions](https://easings.net/) or [cubic-bezier](https://cubic-bezier.com/)
      - Type: `string | [number, number, number, number]`
      - Default: [`[0.65, 0.1, 0.9, 0.4]`](https://cubic-bezier.com/#.65,.1,.9,.4)
  - `output` (optional): return values
    - Type: `'array' | 'object' | 'css'`
    - Default: `'array'`

### Return values

Depends on the value of the output option.

#### `array` (default)

```json
[
  [0, "0.216px", "1.361px", 0, [0, 0, 0, 0.027]],
  [0, "0.622px", "3.197px", 0, [0, 0, 0, 0.039]],
  [0, "1.447px", "6.325px", 0, [0, 0, 0, 0.049]],
  [0, "4px", "16px", 0, [0, 0, 0, 0.08]]
]
```

#### `object`

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

#### `css`

```txt
0 0.216px 1.361px rgba(0, 0, 0, 0.027), 0 0.622px 3.197px rgba(0, 0, 0, 0.039), 0 1.447px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
