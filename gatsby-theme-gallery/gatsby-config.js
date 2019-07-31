module.exports = options => {
  const { galleryPath = "content/gallery" } = options;

  return {
    siteMetadata: {
      title: "Gatsby Theme Gallery",
      description: "",
      author: "",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/epilande/gatsby-theme-gallery",
        },
      ],
    },
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
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-typescript",
    ],
  };
};
