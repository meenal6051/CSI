// src/theme.js
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;