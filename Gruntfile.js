module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
        // sprite:{
        //     all: {
        //         algorithm: 'left-right',
        //         src: 'src/images/sprite/*',
        //         destImg: 'src/images/sprite.png',
        //         destCSS: 'src/less/sprite.less',
        //         cssFormat: 'less',
        //     }
        // },
        imageoptim: {
            dist: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: 'src/images'
                }]
            }
        }
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

    grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-imageoptim');
	grunt.registerTask('default', tasks);
};
