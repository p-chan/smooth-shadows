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

const shadows = smoothShadows(0, '16px', '24px', 0, [0, 0, 0, 0.08])

console.log(shadows)
/*
[
  [ 0, '0.864px', '2.041px', 0, [ 0, 0, 0, 0.027 ] ],
  [ 0, '2.488px', '4.795px', 0, [ 0, 0, 0, 0.039 ] ],
  [ 0, '5.789px', '9.488px', 0, [ 0, 0, 0, 0.049 ] ],
  [ 0, '16px', '24px', 0, [ 0, 0, 0, 0.08 ] ]
]
*/
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
