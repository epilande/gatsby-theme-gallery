import * as React from "react";
import Img from "gatsby-image";
import useGallery from "../hooks/useGallery";

const Gallery = () => {
  const images = useGallery();

  return (
    <div>
      <h2>Gallery</h2>
      {images.map(image => (
        <Img key={image.id} alt={image.name} fluid={image.fluid} />
      ))}
    </div>
  );
};

export default Gallery;
