import React, { FC, ReactNode } from 'react';
import { ContainerWrapper } from './Container.styled';

interface ContainerProps {
   children:ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => (
 <ContainerWrapper>
   {children}
 </ContainerWrapper>
);

export default Container;
