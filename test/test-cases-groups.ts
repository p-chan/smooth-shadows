// Auto generate by ../scripts/create-test-cases-groups.ts
import { TestCasesGroup } from '../scripts/create-test-cases-groups'

export const testCasesGroups: TestCasesGroup[] = [
  {
    name: 'basic',
    tests: [
      {
        name: 'basic',
        input: { x: 0, y: '4px', blur: '16px', spread: 0, color: [0, 0, 0, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.027), 0 0.622px 3.197px rgba(0, 0, 0, 0.039), 0 1.447px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'basic-with-spread',
        input: { x: 0, y: '4px', blur: '16px', spread: '64px', color: [0, 0, 0, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px 64px rgba(0, 0, 0, 0.027), 0 0.622px 3.197px 64px rgba(0, 0, 0, 0.039), 0 1.447px 6.325px 64px rgba(0, 0, 0, 0.049), 0 4px 16px 64px rgba(0, 0, 0, 0.08)',
      },
    ],
  },
  {
    name: 'colors',
    tests: [
      {
        name: 'color-red',
        input: { x: 0, y: '4px', blur: '16px', spread: 0, color: [255, 0, 0, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px rgba(255, 0, 0, 0.027), 0 0.622px 3.197px rgba(255, 0, 0, 0.039), 0 1.447px 6.325px rgba(255, 0, 0, 0.049), 0 4px 16px rgba(255, 0, 0, 0.08)',
      },
      {
        name: 'color-green',
        input: { x: 0, y: '4px', blur: '16px', spread: 0, color: [0, 255, 0, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px rgba(0, 255, 0, 0.027), 0 0.622px 3.197px rgba(0, 255, 0, 0.039), 0 1.447px 6.325px rgba(0, 255, 0, 0.049), 0 4px 16px rgba(0, 255, 0, 0.08)',
      },
      {
        name: 'color-blue',
        input: { x: 0, y: '4px', blur: '16px', spread: 0, color: [0, 0, 255, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px rgba(0, 0, 255, 0.027), 0 0.622px 3.197px rgba(0, 0, 255, 0.039), 0 1.447px 6.325px rgba(0, 0, 255, 0.049), 0 4px 16px rgba(0, 0, 255, 0.08)',
      },
      {
        name: 'color-white',
        input: { x: 0, y: '4px', blur: '16px', spread: 0, color: [255, 255, 255, 0.08], options: { output: 'css' } },
        output:
          '0 0.216px 1.361px rgba(255, 255, 255, 0.027), 0 0.622px 3.197px rgba(255, 255, 255, 0.039), 0 1.447px 6.325px rgba(255, 255, 255, 0.049), 0 4px 16px rgba(255, 255, 255, 0.08)',
      },
    ],
  },
  {
    name: 'easings',
    tests: [
      {
        name: 'easings-offset-cubicBezierLinear',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: [0.25, 0.25, 0.75, 0.75] }, output: 'css' },
        },
        output:
          '0 1px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInSine' }, output: 'css' },
        },
        output:
          '0 0.31px 1.361px rgba(0, 0, 0, 0.027), 0 1.202px 3.197px rgba(0, 0, 0, 0.039), 0 2.469px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutSine' }, output: 'css' },
        },
        output:
          '0 1.531px 1.361px rgba(0, 0, 0, 0.027), 0 2.798px 3.197px rgba(0, 0, 0, 0.039), 0 3.69px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutSine' }, output: 'css' },
        },
        output:
          '0 0.579px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.421px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInCubic' }, output: 'css' },
        },
        output:
          '0 0.066px 1.361px rgba(0, 0, 0, 0.027), 0 0.511px 3.197px rgba(0, 0, 0, 0.039), 0 1.691px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutCubic' }, output: 'css' },
        },
        output:
          '0 2.309px 1.361px rgba(0, 0, 0, 0.027), 0 3.489px 3.197px rgba(0, 0, 0, 0.039), 0 3.934px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutCubic' }, output: 'css' },
        },
        output:
          '0 0.283px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.717px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInQuint' }, output: 'css' },
        },
        output:
          '0 0.012px 1.361px rgba(0, 0, 0, 0.027), 0 0.154px 3.197px rgba(0, 0, 0, 0.039), 0 0.941px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutQuint' }, output: 'css' },
        },
        output:
          '0 3.059px 1.361px rgba(0, 0, 0, 0.027), 0 3.846px 3.197px rgba(0, 0, 0, 0.039), 0 3.988px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutQuint' }, output: 'css' },
        },
        output:
          '0 0.177px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.823px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInCirc' }, output: 'css' },
        },
        output:
          '0 0.127px 1.361px rgba(0, 0, 0, 0.027), 0 0.539px 3.197px rgba(0, 0, 0, 0.039), 0 1.361px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutCirc' }, output: 'css' },
        },
        output:
          '0 2.639px 1.361px rgba(0, 0, 0, 0.027), 0 3.461px 3.197px rgba(0, 0, 0, 0.039), 0 3.873px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutCirc' }, output: 'css' },
        },
        output:
          '0 0.168px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.832px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInQuad' }, output: 'css' },
        },
        output:
          '0 0.245px 1.361px rgba(0, 0, 0, 0.027), 0 1.005px 3.197px rgba(0, 0, 0, 0.039), 0 2.255px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutQuad' }, output: 'css' },
        },
        output:
          '0 1.745px 1.361px rgba(0, 0, 0, 0.027), 0 2.995px 3.197px rgba(0, 0, 0, 0.039), 0 3.755px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutQuad' }, output: 'css' },
        },
        output:
          '0 0.481px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.519px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInQuart' }, output: 'css' },
        },
        output:
          '0 0.024px 1.361px rgba(0, 0, 0, 0.027), 0 0.264px 3.197px rgba(0, 0, 0, 0.039), 0 1.246px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutQuart' }, output: 'css' },
        },
        output:
          '0 2.754px 1.361px rgba(0, 0, 0, 0.027), 0 3.736px 3.197px rgba(0, 0, 0, 0.039), 0 3.976px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutQuart' }, output: 'css' },
        },
        output:
          '0 0.211px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.789px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInExpo' }, output: 'css' },
        },
        output:
          '0 0.009px 1.361px rgba(0, 0, 0, 0.027), 0 0.113px 3.197px rgba(0, 0, 0, 0.039), 0 0.698px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutExpo' }, output: 'css' },
        },
        output:
          '0 3.302px 1.361px rgba(0, 0, 0, 0.027), 0 3.887px 3.197px rgba(0, 0, 0, 0.039), 0 3.991px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutExpo' }, output: 'css' },
        },
        output:
          '0 0.16px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 3.84px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInBack' }, output: 'css' },
        },
        output:
          '0 -0.239px 1.361px rgba(0, 0, 0, 0.027), 0 -0.35px 3.197px rgba(0, 0, 0, 0.039), 0 0.735px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeOutBack' }, output: 'css' },
        },
        output:
          '0 3.265px 1.361px rgba(0, 0, 0, 0.027), 0 4.35px 3.197px rgba(0, 0, 0, 0.039), 0 4.239px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-offset-easeInOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { offset: 'easeInOutBack' }, output: 'css' },
        },
        output:
          '0 -0.391px 1.361px rgba(0, 0, 0, 0.027), 0 2px 3.197px rgba(0, 0, 0, 0.039), 0 4.391px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'easings-blur-cubicBezierLinear',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: [0.25, 0.25, 0.75, 0.75] }, output: 'css' },
        },
        output:
          '0 0.216px 4px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 12px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInSine' }, output: 'css' },
        },
        output:
          '0 0.216px 1.24px rgba(0, 0, 0, 0.027), 0 0.622px 4.806px rgba(0, 0, 0, 0.039), 0 1.447px 9.875px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutSine' }, output: 'css' },
        },
        output:
          '0 0.216px 6.125px rgba(0, 0, 0, 0.027), 0 0.622px 11.194px rgba(0, 0, 0, 0.039), 0 1.447px 14.76px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutSine' }, output: 'css' },
        },
        output:
          '0 0.216px 2.315px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 13.685px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 0.266px rgba(0, 0, 0, 0.027), 0 0.622px 2.045px rgba(0, 0, 0, 0.039), 0 1.447px 6.763px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 9.237px rgba(0, 0, 0, 0.027), 0 0.622px 13.955px rgba(0, 0, 0, 0.039), 0 1.447px 15.734px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 1.133px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 14.867px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 0.05px rgba(0, 0, 0, 0.027), 0 0.622px 0.618px rgba(0, 0, 0, 0.039), 0 1.447px 3.762px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 12.238px rgba(0, 0, 0, 0.027), 0 0.622px 15.382px rgba(0, 0, 0, 0.039), 0 1.447px 15.95px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 0.707px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 15.293px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 0.509px rgba(0, 0, 0, 0.027), 0 0.622px 2.158px rgba(0, 0, 0, 0.039), 0 1.447px 5.446px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 10.554px rgba(0, 0, 0, 0.027), 0 0.622px 13.842px rgba(0, 0, 0, 0.039), 0 1.447px 15.491px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 0.673px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 15.327px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 0.978px rgba(0, 0, 0, 0.027), 0 0.622px 4.02px rgba(0, 0, 0, 0.039), 0 1.447px 9.02px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 6.98px rgba(0, 0, 0, 0.027), 0 0.622px 11.98px rgba(0, 0, 0, 0.039), 0 1.447px 15.022px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 1.922px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 14.078px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 0.097px rgba(0, 0, 0, 0.027), 0 0.622px 1.054px rgba(0, 0, 0, 0.039), 0 1.447px 4.983px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 11.017px rgba(0, 0, 0, 0.027), 0 0.622px 14.946px rgba(0, 0, 0, 0.039), 0 1.447px 15.903px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 0.845px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 15.155px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 0.037px rgba(0, 0, 0, 0.027), 0 0.622px 0.452px rgba(0, 0, 0, 0.039), 0 1.447px 2.79px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 13.21px rgba(0, 0, 0, 0.027), 0 0.622px 15.548px rgba(0, 0, 0, 0.039), 0 1.447px 15.963px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 0.641px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 15.359px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInBack' }, output: 'css' },
        },
        output:
          '0 0.216px -0.954px rgba(0, 0, 0, 0.027), 0 0.622px -1.398px rgba(0, 0, 0, 0.039), 0 1.447px 2.939px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeOutBack' }, output: 'css' },
        },
        output:
          '0 0.216px 13.061px rgba(0, 0, 0, 0.027), 0 0.622px 17.398px rgba(0, 0, 0, 0.039), 0 1.447px 16.954px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-blur-easeInOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { blur: 'easeInOutBack' }, output: 'css' },
        },
        output:
          '0 0.216px -1.563px rgba(0, 0, 0, 0.027), 0 0.622px 8px rgba(0, 0, 0, 0.039), 0 1.447px 17.563px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'easings-alpha-cubicBezierLinear',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: [0.25, 0.25, 0.75, 0.75] }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.02), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInSine' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.006), 0 0.622px 3.197px rgba(0, 0, 0, 0.024), 0 1.447px 6.325px rgba(0, 0, 0, 0.049), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutSine' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.031), 0 0.622px 3.197px rgba(0, 0, 0, 0.056), 0 1.447px 6.325px rgba(0, 0, 0, 0.074), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutSine',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutSine' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.012), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.068), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.001), 0 0.622px 3.197px rgba(0, 0, 0, 0.01), 0 1.447px 6.325px rgba(0, 0, 0, 0.034), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.046), 0 0.622px 3.197px rgba(0, 0, 0, 0.07), 0 1.447px 6.325px rgba(0, 0, 0, 0.079), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutCubic',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutCubic' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.006), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.074), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0), 0 0.622px 3.197px rgba(0, 0, 0, 0.003), 0 1.447px 6.325px rgba(0, 0, 0, 0.019), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.061), 0 0.622px 3.197px rgba(0, 0, 0, 0.077), 0 1.447px 6.325px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutQuint',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutQuint' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.004), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.076), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.003), 0 0.622px 3.197px rgba(0, 0, 0, 0.011), 0 1.447px 6.325px rgba(0, 0, 0, 0.027), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.053), 0 0.622px 3.197px rgba(0, 0, 0, 0.069), 0 1.447px 6.325px rgba(0, 0, 0, 0.077), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutCirc',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutCirc' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.003), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.077), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.005), 0 0.622px 3.197px rgba(0, 0, 0, 0.02), 0 1.447px 6.325px rgba(0, 0, 0, 0.045), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.035), 0 0.622px 3.197px rgba(0, 0, 0, 0.06), 0 1.447px 6.325px rgba(0, 0, 0, 0.075), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutQuad',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutQuad' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.01), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.07), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0), 0 0.622px 3.197px rgba(0, 0, 0, 0.005), 0 1.447px 6.325px rgba(0, 0, 0, 0.025), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.055), 0 0.622px 3.197px rgba(0, 0, 0, 0.075), 0 1.447px 6.325px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutQuart',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutQuart' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.004), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.076), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0), 0 0.622px 3.197px rgba(0, 0, 0, 0.002), 0 1.447px 6.325px rgba(0, 0, 0, 0.014), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.066), 0 0.622px 3.197px rgba(0, 0, 0, 0.078), 0 1.447px 6.325px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutExpo',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutExpo' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.003), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.077), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInBack' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, -0.005), 0 0.622px 3.197px rgba(0, 0, 0, -0.007), 0 1.447px 6.325px rgba(0, 0, 0, 0.015), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeOutBack' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, 0.065), 0 0.622px 3.197px rgba(0, 0, 0, 0.087), 0 1.447px 6.325px rgba(0, 0, 0, 0.085), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      {
        name: 'esings-alpha-easeInOutBack',
        input: {
          x: 0,
          y: '4px',
          blur: '16px',
          spread: 0,
          color: [0, 0, 0, 0.08],
          options: { easings: { alpha: 'easeInOutBack' }, output: 'css' },
        },
        output:
          '0 0.216px 1.361px rgba(0, 0, 0, -0.008), 0 0.622px 3.197px rgba(0, 0, 0, 0.04), 0 1.447px 6.325px rgba(0, 0, 0, 0.088), 0 4px 16px rgba(0, 0, 0, 0.08)',
      },
    ],
  },
]
