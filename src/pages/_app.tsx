import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AccessibilikState } from "@/utils";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  useEffect(() => {
    const dir = locale === "he" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem("i18nextLng", locale ?? "en");
    let accessibilik = null;
    const acc = window.sessionStorage.getItem("accessibilik");
    if (acc) {
      accessibilik = JSON.parse(acc) as AccessibilikState;
      accessibilik.language = locale ?? "en"
      window.sessionStorage.setItem("accessibilik",JSON.stringify(accessibilik));
    }
  }, [locale]);
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
