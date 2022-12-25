export const theme = {
  bg: {
    gradient_1: '#5f449b',
    gradient_2: '#22205c',
    gradient: () => `${theme.bg.gradient_1}, ${theme.bg.gradient_2}`,
    darkTransparent: '#0000001a',
  },
  fg: {
    hr: '#7f7bd3',
  },
  textShadow: { inactive: '0 0 5px black', active: '0 0 5px white' },
}

export type Theme = { theme: typeof theme }
