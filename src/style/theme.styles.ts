export const theme = {
  bg: {
    gradient_1: '#5b4194',
    gradient_2: 'hsl(240, 50%, 25%)',
    gradient: () => `${theme.bg.gradient_1}, ${theme.bg.gradient_2}`,
    darkTransparent: 'hsla(0, 0%, 0%, 0.1)',
  },
  fg: {
    text: 'hsl(0, 0%, 90%)',
    hr: 'hsl(243, 50%, 65%)',
    textShadow: {
      inactive: '0 0 5px hsl(0, 0%, 10%)',
      active: '0 0 10px hsl(190, 100%, 60%)',
      hover: '0 0 5px hsl(190, 100%, 60%)',
    },
  },
}

export type Theme = { theme: typeof theme }
