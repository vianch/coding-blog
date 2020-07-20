import PropTypes from 'prop-types';

export const PostPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlTitle: PropTypes.string.isRequired,
  dateTimestamp: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnailImageUrl: PropTypes.string.isRequired,
  markdownContent: PropTypes.string.isRequired,
  seoTitleTag: PropTypes.string.isRequired,
  seoMetaDescription: PropTypes.string.isRequired,
});
