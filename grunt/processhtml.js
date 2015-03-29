module.exports = {
    dev: {
        files: [
            { expand: true, cwd: 'tmp/', src: 'index.html', dest: 'tmp/' }
        ]
    },
    dist: {
        options: {
            strip: true,
            data: {
                // Do not forget insert real GA tracking ID
                gaTrackingId: process.env.GATRACKINGID
            },
        },
        files: [
            { expand: true, cwd: 'tmp/', src: 'index.html', dest: 'tmp/' },
            { expand: true, cwd: 'tmp/', src: '404.html', dest: 'dist/' }
        ]
    }
};
