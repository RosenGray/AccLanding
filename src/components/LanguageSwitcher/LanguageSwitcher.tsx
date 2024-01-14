import React, { FC, useCallback, useMemo, useState } from 'react';

import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { capitalize } from '@/utils';
import { LanguageSwitcherWrapper,Link,Flag } from './LanguageSwitcher.styled';

const countries:Record<string,string> = {
   he:'il',
   en:'us'
}


interface LanguageSwitcherProps {
   onChange?:(locale:string) => unknown;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({onChange}) => {
   const { i18n } = useTranslation();
   const { language: currentLanguage } = i18n;
   const router = useRouter();
   const locales = router.locales ?? [currentLanguage];




    const renderLinks = () => {
      return locales.map((locale) => {
        
         return (
            <Link  key={locale} href={router.asPath} locale={locale}>
             <Flag className={`fi fi-${ countries[locale]} `}/>
          </Link>
         )
      });
    }
   

   return (
      <LanguageSwitcherWrapper>
{renderLinks()}

   </LanguageSwitcherWrapper>
   )
}



export default LanguageSwitcher;
