import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 769,
      lg: 1004,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#651FFF',
    },
    secondary: {
      main: '#B388FF',
    },
    background: {
      default: '#ffffff',
    },
    font: {
      light: '#B6B6B6',
      main: '#000000',
    },
  },

  typography: {
    fontFamily: ['Noto Sans TC', 'sans-serif'].join(','),
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    font: Palette['primary'];
  }
  interface PaletteOptions {
    font?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    font: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    font: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    font: true;
  }
}

export default theme;
