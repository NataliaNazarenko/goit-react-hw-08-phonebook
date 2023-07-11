export const theme = Object.freeze({
  colors: {
    accent: '#0f6805',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #FFD194, #e2b06d)'],
    tagBackground: ['linear-gradient(to bottom, #119e04, #37782f)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '24px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
