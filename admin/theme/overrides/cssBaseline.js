import palette from '~/theme/palette';

export default {
  '@global': {
    html: {
      fontSize: '62.5%', // reset default font size to 10px = 1rem
    },

    a: {
      color: palette.deeper,
      textDecoration: 'none',

      '&:hover': {
        color: palette.deeper,
      },
    },

    h2: {
      padding: 0,
      margin: 0,
    },

    p: {
      padding: 0,
      margin: 0,
    },
  },
};
