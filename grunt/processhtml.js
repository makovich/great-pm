module.exports = {
  dev: {
    files: [
      { expand: true, cwd: 'tmp/', src: 'index.html', dest: 'tmp/' }
    ]
  },
  dist: {
    options: {
      strip: true,
    },
    files: [
      { expand: true, cwd: 'tmp/', src: 'index.html', dest: 'tmp/' },
      { expand: true, cwd: 'tmp/', src: '404.html', dest: 'dist/' }
    ]
  }
};
