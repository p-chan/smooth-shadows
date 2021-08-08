import { format, resolveConfig } from 'prettier'
import { resolve } from 'path'
import { writeFile } from 'fs/promises'

import { easings } from '../src/easings'
import { smoothShadows, CSSLength, CSSColorRGBA, LayersOption, EasingsOption, OutputOption } from '../src/shadows'

export type TestCasesGroup = {
  name: string
  tests: TestCase[]
}

type TestCase = {
  name: string
  input: {
    x: CSSLength
    y: CSSLength
    blur: CSSLength
    spread: CSSLength
    color: CSSColorRGBA
    options?: Partial<{ layers: LayersOption; easings: EasingsOption; output: OutputOption }>
  }
  output: string
}

type TestInputCasesGroup = {
  name: string
  tests: TestInputCase[]
}

type TestInputCase = Omit<TestCase, 'output'>
;(async () => {
  const easingOptionValues: ['offset', 'blur', 'alpha'] = ['offset', 'blur', 'alpha']

  const testInputGroups: TestInputCasesGroup[] = [
    {
      name: 'basic',
      tests: [
        {
          name: 'basic',
          input: {
            x: 0,
            y: '4px',
            blur: '16px',
            spread: 0,
            color: [0, 0, 0, 0.08],
            options: { output: 'css' },
          },
        },
        {
          name: 'basic-with-spread',
          input: {
            x: 0,
            y: '4px',
            blur: '16px',
            spread: '64px',
            color: [0, 0, 0, 0.08],
            options: { output: 'css' },
          },
        },
      ],
    },
    {
      name: 'colors',
      tests: [
        // red
        {
          name: 'red',
          color: [255, 0, 0],
        },
        // green
        {
          name: 'green',
          color: [0, 255, 0],
        },
        // blue
        {
          name: 'blue',
          color: [0, 0, 255],
        },
        // white
        {
          name: 'white',
          color: [255, 255, 255],
        },
      ].map(({ name, color }) => {
        return {
          name: `color-${name}`,
          input: {
            x: 0,
            y: '4px',
            blur: '16px',
            spread: 0,
            color: [color[0], color[1], color[2], 0.08],
            options: { output: 'css' },
          },
        }
      }),
    },
    {
      name: 'easings',
      tests: easingOptionValues
        .map((option) => {
          const cubicBeziers: TestInputCase = {
            name: `easings-${option}-cubicBezierLinear`,
            input: {
              x: 0,
              y: '4px',
              blur: '16px',
              spread: 0,
              color: [0, 0, 0, 0.08],
              options: {
                easings: {
                  [option]: [0.25, 0.25, 0.75, 0.75],
                },
                output: 'css',
              },
            },
          }

          const easingFunction: TestInputCase[] = easings.map(({ name }) => {
            return {
              name: `esings-${option}-${name}`,
              input: {
                x: 0,
                y: '4px',
                blur: '16px',
                spread: 0,
                color: [0, 0, 0, 0.08],
                options: {
                  easings: {
                    [option]: name,
                  },
                  output: 'css',
                },
              },
            }
          })

          return [cubicBeziers, ...easingFunction]
        })
        .flat(),
    },
  ]

  const testCasesGroups: TestCasesGroup[] = testInputGroups.map(({ name, tests }) => {
    return {
      name,
      tests: tests.map(({ name, input }) => {
        const easingsOption = (() => {
          if (input.options == undefined || input.options.easings == undefined) return {}

          return input.options.easings
        })()

        const options = Object.assign({ output: 'css' as const }, { easings: easingsOption })

        return {
          name,
          input,
          output: smoothShadows(input.x, input.y, input.blur, input.spread, input.color, options),
        }
      }),
    }
  })

  const path = resolve(process.cwd(), 'test', 'test-cases-groups.ts')

  resolveConfig(resolve(process.cwd(), '.prettierrc')).then(async (options) => {
    if (options == undefined) throw new Error('options are not defined')

    await writeFile(
      path,
      format(
        `// Auto generate by ../scripts/create-test-cases-groups.ts\nimport { TestCasesGroup } from '../scripts/create-test-cases-groups'\n\nexport const testCasesGroups: TestCasesGroup[] = ${JSON.stringify(
          testCasesGroups
        )}`,
        options
      ),
      'utf-8'
    )
  })
})()
