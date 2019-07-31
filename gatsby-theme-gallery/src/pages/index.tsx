import * as React from "react";
import { Layout } from "theme-ui";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import useSiteMetadata from "../hooks/useSiteMetadata";

const HomePage = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <Header />
      <Gallery />
      {siteMetadata.author && <Footer />}
    </Layout>
  );
};

export default HomePage;
