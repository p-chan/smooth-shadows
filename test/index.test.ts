import { smoothShadows } from '../src'
import { testCasesGroups } from './test-cases-groups'

testCasesGroups.map(({ name, tests }) => {
  describe(name, () => {
    tests.map(({ name, input, output }) => {
      test(name, () => {
        const easingsOption = (() => {
          if (input.options == undefined || input.options.easings == undefined) return {}

          return input.options.easings
        })()

        const options = Object.assign({ output: 'css' as const }, { easings: easingsOption })

        expect(
          smoothShadows(
            input.x,
            input.y,
            input.blur,
            input.spread,
            [input.color[0], input.color[1], input.color[2], input.color[3]],
            options
          )
        ).toEqual(output)
      })
    })
  })
})

describe('layers options', () => {
  test('no option', () => {
    expect(smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08]).length == 4).toBeTruthy()
  })

  test('increase', () => {
    expect(smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { layers: 8 }).length == 8).toBeTruthy()
  })

  test('decrease', () => {
    expect(smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { layers: 2 }).length == 2).toBeTruthy()
  })
})

describe('output option', () => {
  test('no option', () => {
    expect(Array.isArray(smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08])[0])).toBeTruthy()
  })

  test('array', () => {
    expect(Array.isArray(smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { output: 'array' })[0])).toBeTruthy()
  })

  test('object', () => {
    expect(
      typeof smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { output: 'object' })[0] === 'object'
    ).toBeTruthy()
  })

  test('css', () => {
    expect(typeof smoothShadows(0, '4px', '16px', 0, [0, 0, 0, 0.08], { output: 'css' }) === 'string').toBeTruthy()
  })
})
