const theme = {
  borders: {
    rounded: {
      none: 0,
      sm: '0.125em',
      rounded: '0.25em',
      md: '0.375em',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
  },
  colors: {
    primary: {
      magenta: 'hsl(300, 43%, 22%)',
      pink: 'hsl(333, 80%, 67%)',
    },
    neutral: {
      magenta: {
        darkGray: 'hsl(303, 10%, 53%)',
        lightGray: 'hsl(300, 24%, 96%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontFamily: `'Spartan', sans-serif`,
    letterSpacing: {
      tighter: '0.05em',
      tight: '0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '15px',
      lg: '1.125rem',
      xl: '1.25rem',
      xl2: '1.5rem',
      xl3: '1.875rem',
      xl4: '2.25rem',
      xl5: '3rem',
      xl6: '4rem',
    },
    weights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default theme;
