export const theme = {
  bg: {
    gradient_1: '#5f449b',
    gradient_2: '#22205c',
    darkTransparent: 'rgba(0 0 0 / 10%)',
  },
  fg: {
    hr: '#7f7bd3',
  },
  textShadow: { inactive: '0 0 5px black', active: '0 0 5px white' },
}

export type Theme = { theme: typeof theme }
