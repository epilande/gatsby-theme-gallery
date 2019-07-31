import * as React from "react";
import { Footer as FooterBase } from "theme-ui";
import SocialLinks from "gatsby-theme-gallery/src/components/SocialLinks";
import useSiteMetadata from "gatsby-theme-gallery/src/hooks/useSiteMetadata";

const Footer = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <FooterBase>
      <p>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</p>
      <SocialLinks />
    </FooterBase>
  );
};

export default Footer;
