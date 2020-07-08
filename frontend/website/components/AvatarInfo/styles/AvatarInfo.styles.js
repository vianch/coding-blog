import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const AvatarInfoStyles = makeStyles(() => ({
  avatarSection: {
    width: '100%',
    height: '20.0rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: '1rem',
  },

  avatarTextSection: {
    width: '100%',
    maxWidth: '70rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingLeft: '1rem',
    flexFlow: 'column wrap',
  },

  avatarTitle: {
    fontSize: fontSizes.xxlarges,
    marginBottom: '1rem',
  },

  avatarDescription: {
    fontSize: fontSizes.normal,
  },
}));
