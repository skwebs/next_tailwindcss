import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  // style={{ backgroundImage: `url("bg.jpg")`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
  render() {
    return (
      <Html lang="en-IN">
        <Head />
        <body className='text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default CustomDocument;
