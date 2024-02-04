// import { Inter,Poppins } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Home from "@/components/Home/Home";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Container/Container";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuoteStripe from "@/components/QuoteStripe/QuoteStripe";
import Script from "next/script";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import Installation from "@/components/Installation/Installation";
import ImportantSection from "@/components/ImportantSection/ImportantSection";

// const inter = Inter({ subsets: ["latin"] });

interface HomePageProps {}

export default function HomePage() {
  const { t } = useTranslation("home");
  const accessibilik = useRef<HTMLElement | null>(null);
  const [isAcc, setIsAcc] = useState(false);

  const accLoadHandler = useCallback(() => {
    const intId = setInterval(() => {
      accessibilik.current = document.getElementById("accessibilik");
      if (accessibilik.current) {
        clearInterval(intId);
        setIsAcc(true);
      }
    }, 1000);
  }, []);

  const showPreviewHandler = useCallback(() => {
    if (accessibilik.current) {
      const accButton = accessibilik.current.querySelector("a");
      if (accButton) {
        accButton.href = "#";
        accButton.click();
      }
    }
  }, []);

  return (
    <Home>
      <Head>
        <title>{t("title")}</title>{" "}
      </Head>
      <Layout>
        <HeroSection isAcc={isAcc} showPreview={showPreviewHandler} />
        <QuoteStripe />
        <FeaturesSection/>
        <Installation/>
        <ImportantSection></ImportantSection>
      </Layout>
      <Script
        src="https://rosengray.github.io/static/accessibilik.min.js"
        onLoad={accLoadHandler}
      />
    </Home>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "en", [
        "home",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
};
