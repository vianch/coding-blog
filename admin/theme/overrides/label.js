import fontSizes from '../fontSizes';
import palette from "~/theme/palette";

export default {
  root: {
    fontSize: fontSizes.normal,

    '&.Mui-focused': {
      color: palette.deeper,
    },

    '&.Mui-error': {
      color: palette.red,
    }
  },

  shrink: {
    transform: 'translate(0, 1.5px) scale(0.9)',
    color: palette.deeper,
  },
};
