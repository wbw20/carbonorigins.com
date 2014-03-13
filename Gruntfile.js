module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.initConfig({
    watch: {
      js: {
        files: ['js/**/*.js', 'html/*.html'],
        tasks: ['concat', 'includes']
      },
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'built'
        }
      }
    }
  });

  grunt.registerTask('default', ['concat', 'copy', 'includes']);
  grunt.registerTask('server', ['connect', 'copy', 'watch']);
};
