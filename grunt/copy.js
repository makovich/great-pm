module.exports = {
  build: {
    src: ['css/*', 'js/*', 'img/**/*', 'index.html', '404.html'],
    dest: 'tmp/'
  },
  dev: {
    src: ['node_modules/jquery/dist/jquery.js', 'node_modules/webfontloader/webfontloader.js', 'fonts/**/*', 'favicon.ico'],
    dest: 'dist/'
  },
  dist: {
    src: ['favicon.ico', 'robots.txt', 'humans.txt'],
    dest: 'dist/'
  }
};
