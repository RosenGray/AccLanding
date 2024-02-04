import { appWithTranslation } from 'next-i18next'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps)  => {
  const {locale} = useRouter();
  useEffect(() => {
    const dir = locale === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  },[locale]);
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp)
