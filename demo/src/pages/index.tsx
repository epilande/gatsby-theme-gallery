import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";

const HomePage = () => {
  return (
    <Layout>
      <h1>
        <pre>Hello, Demo Site</pre>
      </h1>
      <Link to="/gallery">Gallery Page</Link>
    </Layout>
  );
};

export default HomePage;
