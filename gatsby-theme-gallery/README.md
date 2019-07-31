<div align="center">
  <h1>gatsby-theme-gallery 🏞</h1>
</div>

<p align="center">
  <strong>A Gatsby Theme for adding a gallery to your site.</strong>
</p>

[![GitHub](https://img.shields.io/github/license/epilande/gatsby-theme-gallery?style=flat-square)](https://github.com/epilande/gatsby-theme-gallery/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gatsby-theme-gallery?style=flat-square)](https://www.npmjs.com/package/gatsby-theme-gallery)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d3f68fe9-2a8c-42b7-94ee-f65c7ab303d0/deploy-status)](https://app.netlify.com/sites/gatsby-theme-gallery/deploys)

## Why?

You want a place to share your photos and you want to host it yourself, no third-party services. You also want the solution to be really simple and extendable.

That's where **`gatsby-theme-gallery`** comes into play. Just drop your images into a directory ([`content/gallery`](#theme-options)) and we'll generate a gallery based on that.

## What's in the box?

- 💯 Easy to set up gallery.
- 🔋 [`Gallery`](#gallery-component) component.
- 🔍 Lightbox functionality.
- 📱 Responsive, mobile friendly.
- 🎨 Fully customizable & extendable with `theme-ui`.

[**DEMO**](https://gatsby-theme-gallery.netlify.com/)

## Installation

```sh
$ npm install --save gatsby-theme-gallery
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: ["gatsby-theme-gallery"],
};
```

That's it! Drop images into your `content/gallery` directory and we'll serve up the gallery on [`basePath`](#theme-options).

## Theme options

| Key           | Default           | Required | Description                |
| ------------- | ----------------- | -------- | -------------------------- |
| `basePath`    | `/`               | `false`  | URL for gallery page       |
| `galleryPath` | `content/gallery` | `false`  | Location of gallery images |

## `<Gallery />`

Don't like the gallery page layout?

No problem! Just use the `Gallery` component.

```jsx
import { Gallery } from "gatsby-theme-gallery";

const MyGallery = () => (
  <AwesomeLayout>
    <Gallery />
  </AwesomeLayout>
);
```

## Shadowing

Gatsby Themes has a concept called [**Shadowing**](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/), which allows users to override a file in a gatsby theme. This allows the theme to be fully customizable.

To start shadowing, create a folder with the theme name `gatsby-theme-gallery` in your project's `src` directory.

Now you're able to override any file in the theme. For example, if you want to override the `Footer` component, create a file:

```sh
src/gatsby-theme-gallery/components/Footer.js
```

Here's a demo of that [`demo/src/gatsby-theme-gallery/components/Footer.js`](https://github.com/epilande/gatsby-theme-gallery/blob/master/demo/src/gatsby-theme-gallery/components/Footer.tsx)

## Available Scripts

#### `$ yarn dev`

This will run the demo app in development mode.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### `$ yarn build`

This will build the demo app for production.

Outputs to the `demo/public` folder.
