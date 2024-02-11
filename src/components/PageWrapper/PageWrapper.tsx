import React, { FC, ReactNode } from 'react';
import { PageWrapperWrapper } from './PageWrapper.styled';

interface PageWrapperProps {
   children:ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({children}) => (
 <PageWrapperWrapper>
   {children}
 </PageWrapperWrapper>
);

export default PageWrapper;
