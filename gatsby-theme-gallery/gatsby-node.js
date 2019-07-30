const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

// Ensure that content directory exist at the site-level
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();
  const galleryPath = themeOptions.galleryPath || "content/gallery";
  const dir = path.join(program.directory, galleryPath);
  if (!fs.existsSync(dir)) {
    reporter.info(`Creating the "${dir}" directory`);
    mkdirp.sync(dir);
  }
};

exports.createPages = ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = themeOptions;

  createPage({
    path: basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.tsx`),
  });
};
