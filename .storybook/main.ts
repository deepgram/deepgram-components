// import type { StorybookConfig } from '@storybook/web-components-vite';

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/experimental-addon-test"
//   ],
//   "framework": {
//     "name": "@storybook/web-components-vite",
//     "options": {}
//   }
// };
// export default config;

import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/components', '../src/styleguide', '../src/stories'],
  addons: ['@storybook/addon-essentials'],
  //staticDirs: ['../dist/lib-components'],
  docs: {
    autodocs: true
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite')

    if (configType !== 'DEVELOPMENT') {
      return config
    }

    return mergeConfig(config, {
      build: {
        // this is set to 'dist' by default which causes hot-reloading for stencil components to break
        // see: https://vitejs.dev/config/server-options.html#server-watch
        // setting it to anything other than dist fixes the issue
        outDir: 'dist-vite'
      }
    })
  },
  core: {
    disableTelemetry: true
  },
  framework: '@storybook/web-components-vite'
}

export default config