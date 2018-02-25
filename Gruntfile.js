module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            style: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['includes']
            }
        },
        sass: {
            dist: {
                options:{
                    trace:true
                },
                files: {
                    'css/build.css': 'scss/base.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./",
                        index: "index.html"
                    }
                }
            }
        },
        includes: {
            files: {
              src: ['src/*.html'], // Source files 
              dest: './', // Destination directory 
              flatten: true,
              cwd: '.',
              options: {
                silent: true,
                banner: '<!-- I am a banner <% includes.files.dest %> -->'
              }
            }
          }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    //load grunt-includes
    grunt.loadNpmTasks('grunt-includes');
    // define default task
    grunt.registerTask('default', ['sass', 'includes']);
    grunt.registerTask('dev', ['default','browserSync', 'watch']);
};