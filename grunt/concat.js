module.exports = function(grunt) {
  return {
    quotes: {
      options: {
        banner: '<ul class="quotes"><li>',
        separator: '</li><li>',
        footer: '</li></ul>'
      },
      src: grunt.file.expand('quotes/*').reverse(),
      dest: 'tmp/quotes.tpl.html'
    }
  };
};
