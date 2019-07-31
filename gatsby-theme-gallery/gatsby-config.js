module.exports = options => {
  const { galleryPath = "content/gallery" } = options;

  return {
    siteMetadata: {
      title: "Gatsby Theme Gallery",
      description: "",
      author: "epilande",
      social: [
        {
          name: "Twitter",
          url: "https://twitter.com/_epilande",
        },
        {
          name: "GitHub",
          url: "https://github.com/epilande",
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
