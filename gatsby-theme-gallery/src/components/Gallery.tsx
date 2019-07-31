/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import useGallery from "../hooks/useGallery";
import Grid from "./Grid";
import Tile from "./Tile";

const Gallery = () => {
  const images = useGallery();
  console.log("TCL: Gallery -> images", images);

  return (
    <Grid>
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
    </Grid>
  );
};

export default Gallery;
