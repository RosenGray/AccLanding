import Box from "@/components/Box/Box";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface Test {
    name:string;
    age:number;
}

const BlogPage = (props) => {
    const {t} = useTranslation('footer')

  return (
    <div>
      <h1>Blog Paged</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher/>
    </div>
  );
};



// This gets called on every request
export const getServerSideProps:GetServerSideProps<Test> = async (context) => {
    console.log(context.locale)
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return {
    props: {
        name:'vladi',
        age:36,
      ...(await serverSideTranslations(context.locale ?? 'en', ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default BlogPage;
