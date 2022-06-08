import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Admin Dashboard for JTI APP" />
          <meta
            name="keywords"
            content="Web Developer, JTI, NEXT JS Admin Dashboard"
          />
          <meta name="theme-color" content="#2F71F0" />
          <link rel="shortcut icon" href="/jti.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
