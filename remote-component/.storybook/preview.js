import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const teamsLightTheme = {
  name: 'light'
};
const teamsDarkTheme = {
  name: 'dark'
};
const teamsHighContrastTheme = {
  name: 'contrast'
};

const themes = [teamsLightTheme, teamsDarkTheme, teamsHighContrastTheme];

addDecorator(withThemesProvider(themes, (props) => {
  return <>
    <div class='StoryBookRoot' style={{backgroundColor: 'white'}}>
      <ThemeProvider {...props} />
    </div>
  </>
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}