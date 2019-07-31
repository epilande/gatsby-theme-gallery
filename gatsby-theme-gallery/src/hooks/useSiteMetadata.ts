import { graphql, useStaticQuery } from "gatsby";

interface Query {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      social: {
        name: string;
        url: string;
      }[];
    };
  };
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              name
              url
            }
          }
        }
      }
    `,
  );
  return data.site.siteMetadata;
};

export default useSiteMetadata;
