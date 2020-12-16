import { createMuiTheme } from '@material-ui/core/styles';
import { blue, amber } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
  typography: {
    fontFamily: 'Jura, sans- serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': 'Jura, sans- serif',
      },
    },
  },
});
