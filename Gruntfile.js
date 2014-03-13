module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["less"],
          cleancss: true,
        },
        files: {
          "built/index.css": "less/index.less"
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
      less: {
        files: ['less/*.less'],
        tasks: ['less']
      },
      copy: {
        files: ['static/**'],
        tasks: ['copy']
      }
    },
  });

  grunt.registerTask('default', ['less', 'copy']);
};
