import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

/* Config */
import { logger } from '~/config/logger';

class WebDocument extends Document {
  // See https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
  // for reference on SSR with material-ui
  static getInitialProps = async (ctx) => {
    try {
      const sheets = new ServerStyleSheets();
      const page = ctx.renderPage;

      ctx.renderPage = () =>
        page({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheets.getStyleElement(),
        ],
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  };

  render() {
    return (
      <html dir="ltr" lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `.async-hide { opacity: 0 !important}`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default WebDocument;
