import React, { FC, ReactNode} from "react";
import { LayoutWrapper, Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer/>
    </LayoutWrapper>
  );
};

export default Layout;
