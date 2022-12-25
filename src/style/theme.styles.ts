export const theme = {
  bg: {
    gradient_1: 'hsl(260, 40%, 40%)',
    gradient_2: 'hsl(240, 50%, 25%)',
    gradient: () => `${theme.bg.gradient_1}, ${theme.bg.gradient_2}`,
    darkTransparent: 'hsla(0, 0%, 0%, 0.102)',
  },
  fg: {
    text: 'hsl(0, 0%, 90%)',
    hr: 'hsl(243, 50%, 65%)',
    textShadow: {
      inactive: '0 0 5px black',
      active: '0 0 5px white',
    },
  },
}

export type Theme = { theme: typeof theme }
