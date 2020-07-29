import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

/* Styles */
import { tagsStyles } from '~/components/Tags/styles/Tags.styles';

const Tags = ({ tags, customClass }) => {
  const classes = tagsStyles();

  return (
    <div className={clsx(customClass, classes.tagElement)}>
      {tags.map((tag) => (
        <Button
          key={`id_tag_${tag}`}
          className={classes.button}
          color="primary"
          disableElevation
          href={`/blog/tag/${tag}`}
          size="medium"
          variant="contained"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

Tags.propTypes = {
  customClass: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
