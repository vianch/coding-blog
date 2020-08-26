import { makeStyles } from '@material-ui/core/styles';

export const mainContainerStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    padding: '6.2rem 0 0 24rem',

    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
}));
