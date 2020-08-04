import PropTypes from 'prop-types';

function ListItemLink(props) {
  const { children } = props;

  return (
    <a aria-hidden="true" {...props}>
      {children}
    </a>
  );
}

ListItemLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItemLink;
