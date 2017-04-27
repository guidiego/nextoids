import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    return { html, head };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/bundle.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
