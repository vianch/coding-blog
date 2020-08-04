import { makeStyles } from '@material-ui/core/styles';

export const tagsStyles = makeStyles(({ breakpoints }) => ({
  tagElement: {
    [breakpoints.down('xs')]: {
      display: 'none',
      visibility: 'hidden',
    },
  },

  button: {
    marginLeft: '0.5rem',
  },
}));
