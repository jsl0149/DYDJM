import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      medium: '1rem',
    },
    fontFamily: {
      Tenada: ['Tenada'],
      HSSaemaul: ['HSSaemaul-Regular'],
      GangwonEduPowerExtraBoldA: ['GangwonEduPowerExtraBoldA'],
    },

    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        infiniteSlide: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce_up: {
          '0%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(var(--drop-height)) scale(1, 0.7)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
        fade_in: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        expand: {
          '0%': {
            transform: 'scaleX(0)',
            width: '0',
          },
          '100%': {
            transform: 'scaleX(1)',
            width: '300px',
          },
        },
        liner: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        rise: {
          '0%': {
            height: '0%',
          },
          '100%': {
            height: '100%',
          },
        },
      },
      animation: {
        infiniteSlide: 'infiniteSlide 3s ease-in-out infinite',
        bounce: 'bounce 1.5s ease-in-out infinite',
        fade_in_fast: 'fade_in 1.5s ease-in-out',
        fade_in_slow: 'fade_in 2s ease-in-out',
        expand: 'expand 0.5s ease-in-out forwards',
        liner: 'liner 1s forwards',
        rise: 'rise 1s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
