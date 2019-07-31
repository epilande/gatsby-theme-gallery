import * as React from "react";
import { Styled, Layout, Header, Footer } from "theme-ui";
import Gallery from "../components/Gallery";
import useSiteMetadata from "../hooks/useSiteMetadata";

const HomePage = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <Header>
        <Styled.h1>{siteMetadata.title}</Styled.h1>
      </Header>
      <Gallery />
      {siteMetadata.author && (
        <Footer>
          <p>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</p>
        </Footer>
      )}
    </Layout>
  );
};

export default HomePage;
