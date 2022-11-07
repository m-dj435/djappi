import React from "react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "../next-seo.config";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <DefaultSeo {...nextSeoConfig} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
