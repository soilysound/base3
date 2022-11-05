// https://preset-env.cssdb.org/

const postcss = require('postcss');
const postcssimport = require('postcss-import');
const inset = require('postcss-inset');
const is = require('@csstools/postcss-is-pseudo-class');
const clamp = require('postcss-clamp');
const nesting = require('@csstools/postcss-nesting-experimental');

const fs = require('fs');
const css = fs.readFileSync('./css/global.css', 'utf-8').toString();

postcss([
  postcssimport(),
  inset(),
  is(),
  clamp(),
  nesting()
]).process(css, { from: './css/global.css' })
  .then(result => {
    fs.writeFile('./css/global-min.css', result.css, () => true)
  })