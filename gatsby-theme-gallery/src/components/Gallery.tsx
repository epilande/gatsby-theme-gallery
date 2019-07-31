/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import useGallery from "../hooks/useGallery";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  grid-gap: 0.5rem;
`;

const Tile = styled.div`
  position: relative;
`;

const Gallery = () => {
  const images = useGallery();

  return (
    <GridContainer>
      {images.map(image => (
        <Tile key={image.id}>
          <Img
            alt={image.name}
            fluid={image.fluid}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Tile>
      ))}
    </GridContainer>
  );
};

export default Gallery;
