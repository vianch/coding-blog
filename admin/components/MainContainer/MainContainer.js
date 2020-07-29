import PropTypes from 'prop-types';

/* Styles */
import { mainContainerStyles } from '~/components/MainContainer/styles/MainContainer.styles';

const MainContainer = props => {
  const classes = mainContainerStyles();

  const { children } = props;
  return <div className={classes.wrapper}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
