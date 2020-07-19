import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';
import palette from '~/theme/palette';

export const footerStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },

  footerLinks: {
    marginBottom: '1rem',
    fontSize: fontSizes.medium,
  },

  footerLink: {
    marginRight: '0.5rem',
    color: palette.secondary,
    textDecoration: 'none',
  },
}));
