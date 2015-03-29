module.exports = function (grunt) {
	return {
	    quotes: {
	        options: {
	            banner: '<ul><li>',
	            separator: '</li><li>',
	            footer: '</li></ul>'
	        },
	        src: grunt.file.expand('quotes/*').reverse(),
	        dest: 'tmp/quotes.tpl.html'
	    }
	};
};
