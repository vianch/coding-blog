import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Styles */
import { contactStyles } from '~/pages/styles/contact.styles';

const Contact = () => {
  const classes = contactStyles();

  return (
    <Container maxWidth="md">
      <Grid alignItems="flex-start" container direction="column">
        <h2 className={classes.title}>
          Don&apos;t be shy, <br />
          leave me <br />a message.
        </h2>

        <div className={classes.contactSection}>
          <h3 className={classes.contactSectionTitle}>Around the Web</h3>

          <ul className={classes.contactInfoList}>
            <li className={classes.contactItem}>
              <strong>Email</strong>:{' '}
              <a href="mailto: info@vianch.com">info@vianch.com</a>
            </li>
            <li className={classes.contactItem}>
              <strong>GitHub</strong>:{' '}
              <a href="https://github.com/coder-rocket-fuel">
                Coder Rocket Fuel
              </a>
            </li>
            <li className={classes.contactItem}>
              <strong>Twitter</strong>:{' '}
              <a href="https://twitter.com/CoderRocketFuel">
                Coder Rocket Fuel Twitter Page
              </a>
            </li>
          </ul>
        </div>
      </Grid>
    </Container>
  );
};

export default Contact;
