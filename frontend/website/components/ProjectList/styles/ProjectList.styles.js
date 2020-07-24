import { createStyles, makeStyles } from '@material-ui/core/styles';

export const projectListStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    root: {
      marginTop: '1.5rem',
    },

    titleWrapper: {
      display: 'flex',
      flexFlow: 'row nowrap',
      marginBottom: '2.5rem',
    },

    listWrapper: {
      width: '100%',
    },

    listItemText: {
      display: 'flex',
      flexFlow: 'row wrap',

      [breakpoints.down('xs')]: {
        flexFlow: 'column nowrap',
      },
    },

    listItemTextPrimary: {
      marginRight: '1.2rem',
    },
  }),
);
