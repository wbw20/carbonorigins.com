module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
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
    watch: {
      js: {
        files: ['js/**/*.js', 'html/*.html'],
        tasks: ['concat', 'includes']
      },
    },
  });

  grunt.registerTask('default', ['less']);
  grunt.registerTask('server', ['connect', 'copy', 'watch']);
};
