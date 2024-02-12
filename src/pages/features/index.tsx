import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import FeaturesWithDescription from "@/components/FeaturesWithDescription/FeaturesWithDescription";
import Installation from "@/components/Installation/Installation";

const FeaturesPage = () => {
  const { t } = useTranslation("home");

  return (
    <PageWrapper>
      <Head>
        <title>{t("nav.features")}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
      </Head>
      <Layout>
        <FeaturesWithDescription/>
        <Installation/>
      </Layout>
    </PageWrapper>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "en", [
        "home",
        "footer",
      ])),
    },
  };
};

export default FeaturesPage;
