import { z } from 'zod';

export type Framework = (typeof supportedFrameworks)[number];

// TODO: sync this/pull this from core
export const supportedFrameworks = [
  'angular',
  'ember',
  'html-vite',
  'html-webpack5',
  'nextjs',
  'experimental-nextjs-vite',
  'nuxt',
  'preact-vite',
  'preact-webpack5',
  'qwik',
  'react-native-web-vite',
  'react-rsbuild',
  'react-vite',
  'react-webpack5',
  'server-webpack5',
  'solid',
  'svelte-vite',
  'svelte-webpack5',
  'sveltekit',
  'vue3-rsbuild',
  'vue3-vite',
  'react-native',
  'vue3-webpack5',
  'web-components-vite',
  'web-components-webpack5',
] as const;

export const supportedFrameworksPackages = {
  'html-vite': '@storybook/html-vite',
  'html-webpack5': '@storybook/html-webpack5',
  'preact-vite': '@storybook/preact-vite',
  'preact-webpack5': '@storybook/preact-webpack5',
  'react-native-web-vite': '@storybook/react-native-web-vite',
  'react-rsbuild': 'storybook-react-rsbuild',
  'react-vite': '@storybook/react-vite',
  'react-webpack5': '@storybook/react-webpack5',
  'server-webpack5': '@storybook/server-webpack5',
  'svelte-vite': '@storybook/svelte-vite',
  'svelte-webpack5': '@storybook/svelte-webpack5',
  'vue3-rsbuild': 'storybook-vue3-rsbuild',
  'vue3-vite': '@storybook/vue3-vite',
  'vue3-webpack5': '@storybook/vue3-webpack5',
  'web-components-vite': '@storybook/web-components-vite',
  'web-components-webpack5': '@storybook/web-components-webpack5',

  angular: '@storybook/angular',
  ember: '@storybook/ember',
  nextjs: '@storybook/nextjs',
  'experimental-nextjs-vite': '@storybook/experimental-nextjs-vite',

  nuxt: '@storybook/vue3-vite',
  qwik: 'storybook-framework-qwik',
  solid: 'storybook-solidjs-vite',
  sveltekit: '@storybook/sveltekit',
  'react-native': '@storybook/react-native',
} satisfies Record<Framework, string>;

export const supportedFrameworksNames = {
  'html-vite': 'HTML with Vite',
  'html-webpack5': 'HTML with Webpack 5',
  'preact-vite': 'Preact with Vite',
  'preact-webpack5': 'Preact with Webpack 5',
  'react-native-web-vite': 'React Native Web with Vite',
  'react-rsbuild': 'React with Rsbuild',
  'react-vite': 'React with Vite',
  'react-webpack5': 'React with Webpack 5',
  'server-webpack5': 'Server with Webpack 5',
  'svelte-vite': 'Svelte with Vite',
  'svelte-webpack5': 'Svelte with Webpack 5',
  'vue3-rsbuild': 'Vue 3 with Rsbuild',
  'vue3-vite': 'Vue 3 with Vite',
  'vue3-webpack5': 'Vue 3 with Webpack 5',
  'web-components-vite': 'Web Components with Vite',
  'web-components-webpack5': 'Web Components with Webpack 5',
  angular: 'Angular',
  ember: 'Ember',
  nextjs: 'NextJS',
  'experimental-nextjs-vite': 'NextJS with Vite',
  nuxt: 'Nuxt',
  qwik: 'Qwik',
  solid: 'Solid',
  sveltekit: 'SvelteKit',
  'react-native': 'React Native',
} satisfies Record<Framework, string>;

export const modernInputs = z.strictObject({
  intents: z //
    .array(z.enum(['dev', 'docs', 'test']))
    .optional()
    .describe('What are you using Storybook for?'),
  features: z //
    .array(z.enum(['onboarding', 'examples', 'essentials', 'typescript', 'vrt']))
    .optional()
    .describe('Choose your features?'),

  directory: z //
    .string()
    .optional()
    .describe('Path where to initialize storybook')
    .default('.'),
  framework: z //
    .enum(supportedFrameworks)
    .optional()
    .describe('Which framework'),

  install: z //
    .boolean()
    .optional()
    .describe('Install dependencies using the package manager'),

  ignoreGitNotClean: z //
    .boolean()
    .optional()
    .describe('Ignore git not clean'),
  ignoreVersion: z //
    .boolean()
    .optional()
    .describe('Ignore version warning'),
});
