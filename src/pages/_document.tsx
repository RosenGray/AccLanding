import { Html, Head, Main, NextScript } from "next/document";

export default function Document(contenxt: any) {
  const { locale } = contenxt;
  const dir = locale === "he" ? "rtl" : "ltr";
  return (
    <Html lang={locale ?? "en"} dir={dir}>
      <Head>
        <meta
          name="google-site-verification"
          content="br4ZOGHfWyMgEuCUj1cWsi_xOWpIO_gJ8zl4fGsBHlM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content={locale} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
