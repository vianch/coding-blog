import Container from '@material-ui/core/Container';
import { Link } from '@material-ui/core';

/* Styles */
import { footerStyles } from '~/components/Footer/styles/Footer.styles';

/* Constants */
import { blogLinks } from '~/core';

/* Custom Components */
import Copyright from '~/components/Footer/CopyRight';

const Footer = () => {
  const classes = footerStyles();
  const { blog, about, contact } = blogLinks;

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.footerLinks}>
          <Link className={classes.footerLink} href={blog.link}>
            {blog.name}
          </Link>
          <Link className={classes.footerLink} href={about.link}>
            {about.name}
          </Link>
          <Link className={classes.footerLink} href={contact.link}>
            {contact.name}
          </Link>
        </div>

        <p>VIANCH BLOG.</p>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
