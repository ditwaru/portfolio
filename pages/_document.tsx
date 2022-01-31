import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            as="font"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap"
            as="font"
            crossOrigin=""
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-openSans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
