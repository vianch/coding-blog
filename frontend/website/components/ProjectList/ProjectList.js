import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import { ListItemLink } from '~/components';

const projectListStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  titleWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: '2.5rem',
  },

  postListWrapper: {
    width: '100%',
  },
});

const ProjectList = ({ title }) => {
  const classes = projectListStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.titleWrapper}>
        <h2>{title}</h2>
      </div>

      <List className={classes.postListWrapper}>
        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/ng2-toasty-toaster"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="ng2-toasty-toaster" />
          </ListItemLink>
        </ListItem>

        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/Vlinker"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="Vlinker" secondary="second text looong" />
          </ListItemLink>
        </ListItem>

        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/smooth-server"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="smooth-server" />
          </ListItemLink>
        </ListItem>

        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/GitConnector"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="GitConnector" />
          </ListItemLink>
        </ListItem>

        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/terminal-for-fitbit"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="terminal-for-fitbit" />
          </ListItemLink>
        </ListItem>

        <ListItem button dense>
          <ListItemIcon>
            <img
              alt="git logo"
              height="25"
              src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
            />
          </ListItemIcon>

          <ListItemLink
            href="https://github.com/vianch/mini-chat"
            rel="noopener"
            target="_blank"
          >
            <ListItemText primary="mini-chat" />
          </ListItemLink>
        </ListItem>
      </List>
    </Grid>
  );
};

ProjectList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectList;
