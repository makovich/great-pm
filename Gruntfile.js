module.exports = function (grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                sprite: 'grunt-spritesmith',
                cssUrlEmbed: 'grunt-css-url-embed'
            }
        }
    });
};
