import '../src/index.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  a11y: { element: '#root' },
};
