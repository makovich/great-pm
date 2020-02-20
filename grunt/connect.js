module.exports = {
  dev: {
    options: {
      base: 'dist',
      open: 'http://127.0.0.1:8000',
      livereload: true
    }
  },
  dist: {
    options: {
      base: 'dist',
      open: 'http://127.0.0.1:8000',
      keepalive: true
    }
  }
};
