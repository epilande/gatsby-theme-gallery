import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

interface Query {
  allFile: {
    nodes: {
      id: string;
      name: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
}

const useGallery = () => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "content/gallery" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
  }));
};

export default useGallery;
