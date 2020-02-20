module.exports = {
  dev: {
    files: ['index.html', 'css/*.css', 'js/*.js', 'img/**/*', 'quotes/*'],
    tasks: ['build'],
    options: {
      livereload: true
    }
  }
};
