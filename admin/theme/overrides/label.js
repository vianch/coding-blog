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
};
