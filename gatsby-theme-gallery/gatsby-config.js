module.exports = options => {
  const { galleryPath = "content/gallery" } = options;

  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: galleryPath,
          path: galleryPath,
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-typescript",
    ],
  };
};
