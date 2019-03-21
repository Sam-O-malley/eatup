module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //uglify task
      uglify: {
 
        build: {
          src: 'js/script.js',
          dest: 'js/script.min.js'
        }
      },

      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
 
          },
          files: {                         // Dictionary of files
            'mainCss/css/style.css': 'mainCss/sass/style.scss'       // 'destination': 'source'
          }
        }
      },

      jshint: {
        all: ['Gruntfile.js', 'js/script.js']
      },
      
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        },
        scripts: {
          files: ['js/script.js'],
          tasks: ['jshint'],
          options: {
            spawn: false,
          },
        },
      }
 
    });
 
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
 
    // Default task(s).
    grunt.registerTask('default', ['uglify','sass', 'watch', 'jshint']);
 
  };
