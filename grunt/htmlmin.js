module.exports = {
  dev: {
    options: {
      minifyJS: true,
      minifyCSS: true
    },
    src: 'tmp/index.html',
    dest: 'dist/index.html'
  },
  dist: {
    options: {
      minifyJS: true,
      minifyCSS: true
    },
    src: 'tmp/index.html',
    dest: 'dist/index.html'
  }
};
