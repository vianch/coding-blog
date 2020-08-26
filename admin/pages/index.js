import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import get from "lodash/get";

/* Constants */
import { httpCodes } from "~/core/constants";

/* Services */
import { postApi } from "../services/post";

/* Styles */
import { blogPostStyles } from "~/theme/pages/blogPost.styles";

/* Components */
import DataTable from "~/components/DataTable/DataTable";

const HomeAdmin = () => {
  const classes = blogPostStyles();
  const [allPosts, setAllPost] = useState([]);

  const loadAllPostData = () => {
    postApi.getAllBlogPost().then((postsResponse) => {
      let postsData = [];

      if (postsResponse && postsResponse.status === httpCodes.ok) {
        postsData = get(postsResponse, 'payload.data', []);
      }

      console.log('DATA RESPOSE: ', postsData);
      setAllPost(postsData);
    });
  };

  useEffect(() => {
    loadAllPostData();
  }, []);

  return (
    <Container className={classes.root}>
      <Head>
        <title>Blog Posts | Admin</title>
      </Head>

      <div className={classes.wrapper}>
        <h2 className={classes.title}>
          Blog posts ({allPosts.length})
        </h2>

        <DataTable tableData={allPosts} />
      </div>
    </Container>
  );
};

export default HomeAdmin;
