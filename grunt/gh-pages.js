module.exports = {
    manual: {
        options: {
            base: 'dist',
            message: 'Manual publish',
        },
        src: ['**/*']
    },
    travis: {
        options: {
            user: {
              name: 'Travis CI',
              email: 'i-know@great.pm'
            },
            base: 'dist',
            message: 'Published by Travis CI',
            silent: true,
            repo: 'https://' + process.env.GH_TOKEN + '@github.com/makovich/great-pm.git'
        },
        src: ['**/*']
    }
};
