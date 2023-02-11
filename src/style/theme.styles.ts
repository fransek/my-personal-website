const media = {
  mobile_s: 320,
  mobile_m: 375,
  mobile_l: 425,
  tablet: 768,
  laptop: 1024,
  laptop_l: 1440,
  four_k: 2560,
}

export const defaultTheme = {
  colors: {
    bg: {
      gradient_1: 'hsl(259, 39%, 42%)',
      gradient_2: 'hsl(240, 50%, 25%)',
      transparent: 'hsla(0, 0%, 0%, 0.1)',
    },
    text: {
      primary: 'hsl(0, 0%, 90%)',
    },
    border: {
      primary: 'hsl(243, 50%, 65%)',
    },
  },
  shadows: {
    inactive: '0 0 5px hsl(0, 0%, 10%)',
    active: '0 0 10px hsl(190, 100%, 60%)',
    hover: '0 0 5px hsl(190, 100%, 60%)',
  },
  media: {
    from: {
      mobile_s: `@media (min-width: ${media.mobile_s}px)`,
      mobile_m: `@media (min-width: ${media.mobile_m}px)`,
      mobile_l: `@media (min-width: ${media.mobile_l}px)`,
      tablet: `@media (min-width: ${media.tablet}px)`,
      laptop: `@media (min-width: ${media.laptop}px)`,
      laptop_l: `@media (min-width: ${media.laptop_l}px)`,
      four_k: `@media (min-width: ${media.four_k}px)`,
    },
    to: {
      mobile_s: `@media (max-width: ${media.mobile_s - 1}px)`,
      mobile_m: `@media (max-width: ${media.mobile_m - 1}px)`,
      mobile_l: `@media (max-width: ${media.mobile_l - 1}px)`,
      tablet: `@media (max-width: ${media.tablet - 1}px)`,
      laptop: `@media (max-width: ${media.laptop - 1}px)`,
      laptop_l: `@media (max-width: ${media.laptop_l - 1}px)`,
      four_k: `@media (max-width: ${media.four_k - 1}px)`,
    },
    px: {
      mobile_s: `${media.mobile_s}px`,
      mobile_m: `${media.mobile_m}px`,
      mobile_l: `${media.mobile_l}px`,
      tablet: `${media.tablet}px`,
      laptop: `${media.laptop}px`,
      laptop_l: `${media.laptop_l}px`,
      four_k: `${media.four_k}px`,
    },
  },
}

export type Theme = { theme: typeof defaultTheme }

export const darkTheme: typeof defaultTheme = {
  colors: {
    bg: {
      gradient_1: 'hsl(222, 14%, 10%)',
      gradient_2: 'hsl(222, 15%, 10%)',
      transparent: 'hsla(0, 0%, 100%, 0.03)',
    },
    text: {
      primary: 'hsl(0, 0%, 90%)',
    },
    border: {
      primary: 'hsl(0, 0%, 30%)',
    },
  },
  shadows: {
    inactive: '0 0 5px hsl(0, 0%, 10%)',
    active: '0 0 10px hsl(255, 100%, 70%)',
    hover: '0 0 5px hsl(255, 100%, 70%)',
  },
  media: {
    from: {
      mobile_s: `@media (min-width: ${media.mobile_s}px)`,
      mobile_m: `@media (min-width: ${media.mobile_m}px)`,
      mobile_l: `@media (min-width: ${media.mobile_l}px)`,
      tablet: `@media (min-width: ${media.tablet}px)`,
      laptop: `@media (min-width: ${media.laptop}px)`,
      laptop_l: `@media (min-width: ${media.laptop_l}px)`,
      four_k: `@media (min-width: ${media.four_k}px)`,
    },
    to: {
      mobile_s: `@media (max-width: ${media.mobile_s - 1}px)`,
      mobile_m: `@media (max-width: ${media.mobile_m - 1}px)`,
      mobile_l: `@media (max-width: ${media.mobile_l - 1}px)`,
      tablet: `@media (max-width: ${media.tablet - 1}px)`,
      laptop: `@media (max-width: ${media.laptop - 1}px)`,
      laptop_l: `@media (max-width: ${media.laptop_l - 1}px)`,
      four_k: `@media (max-width: ${media.four_k - 1}px)`,
    },
    px: {
      mobile_s: `${media.mobile_s}px`,
      mobile_m: `${media.mobile_m}px`,
      mobile_l: `${media.mobile_l}px`,
      tablet: `${media.tablet}px`,
      laptop: `${media.laptop}px`,
      laptop_l: `${media.laptop_l}px`,
      four_k: `${media.four_k}px`,
    },
  },
}
