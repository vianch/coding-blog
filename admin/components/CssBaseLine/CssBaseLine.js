import MuiCssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from './styles/cssBaseline.styles';

const CssBaseline = () => {
  const classes = useStyles();
  return <MuiCssBaseline classes={{ global: classes.global }} />;
};

export default CssBaseline;
