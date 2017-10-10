# jekyll-webpack

A simple opinionated boilerplate for Jekyll.

Typically you would `npm build` then upload the result to Amazon S3, Github pages, or an FTP server of your choosing.

## Why ?

Because using an additional tool for managing your dependencies (`.js`, `.css`, images, fonts...) seems like a nice improvement to the already awesome Jekyll.

## Usage

Simply use `npm start` or ` npm build`:

```sh
# Start Jekyll and Webpack in --watch mode
# Serve `_site/` with browser-sync → http://localhost:3000
npm start

# Build files → `_site/`
npm build

# Build files → `_site/` with --verbose
npm build:debug
```

If you have any problems, make sure you have `Bundler` and `Jekyll` installed (see this [quickstart](https://jekyllrb.com/docs/quickstart/)) then clone the repo and `npm install`.

## Includes

* [Jekyll](https://jekyllrb.com/)
* [Webpack](https://webpack.js.org/) (no one wants to write ES5 anymore)
* [BrowserSync](https://www.browsersync.io/) (mobile and x-browser testing)
* [React](https://reactjs.org/)
* [Sass](http://sass-lang.com/)
* [PostCSS](https://github.com/postcss/postcss) (mostly for [autoprefixer](https://github.com/postcss/autoprefixer))

Consistency is achieved on each commit with `lint-staged` and the following helpers:
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://eslint.org/) (with [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
* [EditorConfig](http://editorconfig.org/)
