import type { Preview } from '@storybook/web-components'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import {defineCustomElements} from '../loader';
defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;