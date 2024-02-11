import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";

const FeaturesPage = () => {
  const { t } = useTranslation("home");
  return (
    <PageWrapper>
      <Head>
        <title>{t("nav.contact")}</title>
      </Head>
      <Layout>
        <ContactUsForm/>
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
        "common"
      ])),
    },
  };
};

export default FeaturesPage;
