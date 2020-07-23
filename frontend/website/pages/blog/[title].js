import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import get from 'lodash/get';

/* Styles */
import { blogStyles } from '~/pages/blog/styles/blog.styles';

/* Services */
import { postApi } from '~/services/api';

/* Core */
import { httpCodes } from '~/core';

/* Utils */
import { timeStampToDate } from '~/utils/date.utils';

/* Components */
import { ErrorContent, HeaderInfo, MetaHead } from '~/components';

const BlogByTitle = ({ title }) => {
  const classes = blogStyles();
  const [postData, setPostData] = useState(null);
  const metaTags = [
    {
      name: 'description',
      content:
        'This meta description will be pulled from our backend REST API when we have it build later',
    },
  ];

  const loadPostData = (urlTitle) => {
    postApi.getBlogPostByUrlTitle(urlTitle).then((postResponse) => {
      let responseData = [];

      if (postResponse && postResponse.status === httpCodes.ok) {
        responseData = get(postResponse, 'payload.data', null);

        if (!responseData) {
          responseData = get(postResponse, 'payload', []);
        }
      }

      setPostData(responseData);
    });
  };

  useEffect(() => {
    if (title) {
      loadPostData(title);
    }
  }, [title]);

  return (
    <Container className={classes.root} maxWidth="md">
      {postData && !postData.notFoundError && (
        <Grid
          className={classes.about}
          container
          direction="column"
          spacing={0}
        >
          <MetaHead
            metaData={metaTags}
            title={get(postData, 'seoTitleTag', '')}
          />
          <HeaderInfo
            image={postData.thumbnailImageUrl}
            subtitle={timeStampToDate(postData.dateTimestamp)}
            title={postData.title}
          />

          {postData && postData.tags && (
            <div className={classes.tagsSection}>
              {postData.tags.map((tag) => (
                <Button
                  key={`id_tag_${tag}`}
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
          )}

          <div>{parse(postData.markdownContent)}</div>
        </Grid>
      )}

      {((postData && (postData.notFoundError || postData.getDataError)) ||
        (postData && postData.length === 0)) && (
        <Grid container justify="center">
          <ErrorContent
            description="Blog post not found."
            errorCode={httpCodes.notDataAvailable}
            title={`No post available for ${title}`}
          />
        </Grid>
      )}
    </Container>
  );
};

BlogByTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
BlogByTitle.getInitialProps = async ({ query }) =>
  query && query.title ? { title: query.title } : null;

export default BlogByTitle;
