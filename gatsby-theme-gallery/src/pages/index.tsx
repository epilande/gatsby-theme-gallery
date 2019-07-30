import * as React from "react";
import { Link } from "gatsby";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div>
      <h1>
        <pre>Hello, gatsby-theme-gallery</pre>
      </h1>
      <Gallery />
      <Link to="/">Back</Link>
    </div>
  );
};

export default HomePage;
