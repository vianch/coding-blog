import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

/* Models */
import { ProjectPropTypes } from '~/models';

/* Styles */
import { projectListStyles } from '~/components/ProjectList/styles/ProjectList.styles';

/* Components */
import { ListItemLink } from '~/components';

const ProjectList = ({ projects, title }) => {
  const classes = projectListStyles();

  return (
    <Grid className={classes.root} item xs={12}>
      <div className={classes.titleWrapper}>
        <h2>{title}</h2>
      </div>

      <List className={classes.listWrapper}>
        {projects.map((project) => (
          <ListItem key={`project_id_${project.id}`} button dense>
            <ListItemIcon>
              <img
                alt="git logo"
                height="25"
                src="https://assets.coderrocketfuel.com/coding-blog-git-thumbnail.png"
              />
            </ListItemIcon>

            <ListItemLink href={project.url} rel="noopener" target="_blank">
              <ListItemText
                classes={{
                  root: classes.listItemText,
                  primary: classes.listItemTextPrimary,
                }}
                primary={project.name}
                secondary={project.description}
              />
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(ProjectPropTypes),
  title: PropTypes.string.isRequired,
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
