const spacingUnit = 8;

export default {
  fontFamily: 'sans-serif',
  colour: {
    primary: 'red',
    secondary: 'green',
    neutral: {
      black: '#222222',
      white: '#ffffff',
      grey: '#cecece',
    },
  },
  spacing: {
    unit: spacingUnit,
    units: multiple => `${multiple * spacingUnit}px`,
  },
  typography: {
    // todo
  },
};
