import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = process.env.NODE_ENV === 'production' ? '/my-nav' : '';
  
  return (
    <Html>
      <Head>
        <link 
          rel="stylesheet" 
          href={`${basePath}/_next/static/css/a0962c970ae9ba35.css`} 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}