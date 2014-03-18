// want to -
//run jekyll,
//live reload
//compile less files, minimize less files, concatenate css/less files,
//move bower components to proper directories (e.g.js files)

'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {



// Project configuration.
	grunt.initConfig({

		jekyll: {
			server : {
				src : 'templates',
				dest: 'dev',
				server : true,
				server_port : 8000,
				auto : true
			},
			dev: {
				src: 'templates',
				dest: 'dev'
			},
			prod: {
				src: 'templates',
				dest: 'prod'
			}
		},

		watch: { // for development run 'grunt watch'
			jekyll: {
				files: ['templates/*.html'],
				tasks: ['jekyll:dev']
			}
		}
	});

	// Default task. Run standard jekyll server.
	grunt.registerTask('default', 'jekyll:server');

	// plugin tasks
	grunt.loadNpmTasks('grunt-jekyll');

  
















};
