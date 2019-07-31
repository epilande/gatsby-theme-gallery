import * as React from "react";
import { Styled, Header as HeaderBase, useColorMode } from "theme-ui";
import styled from "@emotion/styled";
import useSiteMetadata from "gatsby-theme-gallery/src/hooks/useSiteMetadata";

const Button = styled.button<{ theme?: any }>`
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
`;

const Header = () => {
  const siteMetadata = useSiteMetadata();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <HeaderBase>
      <Styled.h1>{siteMetadata.title}</Styled.h1>

      <Button
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </HeaderBase>
  );
};

export default Header;
