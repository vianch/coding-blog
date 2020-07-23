import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const HeaderInfoStyles = makeStyles(() => ({
  ImageSection: {
    width: '100%',
    height: '20.0rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: '1rem',
  },

  headerTitleSection: {
    width: 'auto',
    maxWidth: '70rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingLeft: '1rem',
    flexFlow: 'column wrap',
  },

  headerTitle: {
    fontSize: fontSizes.xxlarges,
    marginBottom: '1rem',
  },

  headerDescription: {
    fontSize: fontSizes.normal,
  },
}));
