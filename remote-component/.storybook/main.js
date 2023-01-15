module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
