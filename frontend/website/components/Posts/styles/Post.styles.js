import { makeStyles } from '@material-ui/core/styles';

import fontSizes from '~/theme/fontSizes';

export const AvatarInfoStyles = makeStyles(() => ({
  postContainer: {
    margin: '2.5rem 0',
  },

  titleWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: '2.5rem',
  },

  title: {
    marginRight: '1.5rem',
    fontSize: fontSizes.xxlarge,
  },

  postListWrapper: {
    width: '100%',
    cursor: 'pointer',
  },
}));
