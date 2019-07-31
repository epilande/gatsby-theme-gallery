import * as React from "react";
import { Styled } from "theme-ui";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SocialLinks = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Styled.div>
      {siteMetadata.social.map(social => (
        <Styled.a
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </Styled.a>
      ))}
    </Styled.div>
  );
};

export default SocialLinks;
