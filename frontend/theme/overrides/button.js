import fontSizes from '../fontSizes';
import palette from '~/theme/palette';

export default {
  root: {
    fontSize: fontSizes.normal,
    fontWeight: 'bold',
    lineHeight: 'normal',
    textTransform: 'none',
  },

  containedPrimary: {
    backgroundColor: palette.deeper,

    '&:hover': {
      backgroundColor: palette.mediumGray,
    },
  },
};
