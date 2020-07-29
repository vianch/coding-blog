import { makeStyles } from '@material-ui/core/styles';
import fontSizes from '~/theme/fontSizes';

export const contactStyles = makeStyles(() => ({
  root: {
    height: 'auto',
    minHeight: 'calc(100vh - 15.2rem)',
  },

  title: {
    padding: '5rem 1.5rem 2.5rem',
    display: 'flex',
    fontSize: '5.7rem',
    lineHeight: '1.2em',
    fontWeight: 900,
  },

  contactSection: {
    margin: '0 1.5rem 2.5rem',
  },

  contactSectionTitle: {
    fontSize: fontSizes.xxlarge,
  },

  contactInfoList: {
    fontSize: fontSizes.medium,
  },

  contactItem: {
    marginBottom: '1.5rem',

    '&:last-child': {
      marginBottom: 0,
    },
  },
}));
