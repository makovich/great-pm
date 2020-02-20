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
        email: 'no@mail.here'
      },
      base: 'dist',
      message: 'Published by Travis CI',
      silent: false,
      repo: 'https://' + process.env.GH_TOKEN + '@github.com/makovich/great-pm.git'
    },
    src: ['**/*']
  }
};
