const SVGO = require('svgo');
const svgo = new SVGO({
  plugins: [
    {removeStyleElement: {}},
    {removeTitle: true}
  ]
});

const optimizeAsync = svgContent => {
  return new Promise(resolve => {
    svgo.optimize(svgContent, result => {
      resolve(result.data);
    });
  });
};

module.exports = optimizeAsync;
