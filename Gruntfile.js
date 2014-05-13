module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["less"],
          cleancss: true,
        },
        files: {
          "built/desktop.css": "less/desktop.less",
          "built/tablet.css": "less/tablet.less"
        }
      }
    },
    uglify: {
      index: {
        files: {
          'built/index.min.js': ['js/index.js']
        }
      },
      vendor: {
        files: {
          'built/vendor.min.js': ['bower_components/jquery/dist/jquery.min.js']
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'static',
          src: ['**'],
          dest: 'built/'
        }]
      }
    },
    watch: {
      uglify: {
        files: ['js/*.js'],
        tasks: ['uglify']
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less']
      },
      copy: {
        files: ['static/**'],
        tasks: ['copy']
      }
    },
  });

  grunt.registerTask('default', ['less', 'uglify', 'copy']);
};
