module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
             options: {
                sourceMap: false,
                presets: ['babel-preset-es2015', 'babili']
            },
            dist: {
                files: {
                    '../dist/top-loader.js': 'top-loader.es6',
                    '../npm_package/top-loader.js': 'top-loader.es6'
                }
            }
        },
        watch: {
            files: ['<%= babel.dist.files %>'],
            tasks: ['babel']
        }
    })

    // grunt.loadNpmTasks('grunt-contrib-uglify');    
    grunt.loadNpmTasks('grunt-babel');    

    grunt.registerTask('default', ['babel']);  
}