import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from './theme';

// Configure the insertion point for JSS styles
// @See https://material-ui.com/customization/css-in-js/#css-injection-order
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

jss.options.insertionPoint = document.getElementById('jss-insertion-point');

export default function Provider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          {children}
        </JssProvider>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
}
