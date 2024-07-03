import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content=" Drylining Finishers & Decorators Ltd is a construction company that specializes in internal partitions, metal stud partitions, traditional plastering, spray plastering, ceiling installation, rendering services, and plasterboard installation. We are based in Portsmouth, UK."
        />
        <meta
          name="keywords"
          content="Internal partitions, metal stud partitions, traditional plastering, spray plastering, ceiling installation, rendering services, plasterboard installation, UK construction services, Portsmouth plastering services"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/dfd-logo.jpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
