module.exports = {
    build: {
        src: ['css/*', 'js/*', 'img/**/*', 'index.html', '404.html'],
        dest: 'tmp/'
    },
    dev: {
        src: ['bower_components/**/*', 'fonts/**/*', 'favicon.ico'],
        dest: 'dist/'
    },
    dist: {
        src: ['favicon.ico', 'robots.txt', 'humans.txt', 'CNAME'],
        dest: 'dist/'
    }
};
