module.exports = function(grunt) {
    grunt.initConfig({

        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {"css/styles.css": "less/source.less"}
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {"css/styles.css": "less/source.less"}
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
