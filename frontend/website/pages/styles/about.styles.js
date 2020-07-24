import { makeStyles } from '@material-ui/core/styles';
import fontSizes from '~/theme/fontSizes';

export const aboutStyles = makeStyles(() => ({
  root: {
    height: 'auto',
    minHeight: 'calc(100vh - 15.2rem)',
  },

  aboutMeSection: {
    margin: '5rem 1.5rem 5rem 1.5rem',
  },

  aboutMeTitle: {
    marginBottom: '1.5rem',
    padding: '0 1.5rem 0 0',
    display: 'flex',
    fontSize: fontSizes.xxlarge,
  },

  aboutMeText: {
    padding: '0 1.5rem 0 0',
    display: 'flex',
    fontSize: fontSizes.large,
    width: '100%',
    maxWidth: '66rem',
  },

  aboutUsingSection: {
    margin: '1.5rem 1.5rem 5rem 1.5rem',
  },

  aboutUsingList: {
    fontSize: fontSizes.medium,
  },

  aboutUsingListItem: {
    marginBottom: '1.5rem',

    '&:last-child': {
      marginBottom: 0,
    },
  },
}));
