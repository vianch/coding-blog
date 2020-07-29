import PropTypes from 'prop-types';
import Head from 'next/head';

const MetaHead = ({ title, metaData }) => {
  const pageTitle = title || 'BLOG';

  return (
    <Head>
      <title>{pageTitle}</title>

      {metaData &&
        metaData.map((metaTag) => {
          return metaTag && metaTag.property ? (
            <meta
              key={metaTag.property}
              content={metaTag.content}
              property={metaTag.property}
            />
          ) : (
            <meta
              key={metaTag.name}
              content={metaTag.content}
              name={metaTag.name}
            />
          );
        })}
    </Head>
  );
};

MetaHead.propTypes = {
  metaData: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      name: PropTypes.string,
      property: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

MetaHead.defaultProps = {
  title: null,
  metaData: null,
};

export default MetaHead;
