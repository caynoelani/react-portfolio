//gulpfile.js

const { src, dest, watch, series } = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); //imports gulp-sass plugin

function buildStyles() {
    return src('src/**/*.scss') //relative path to our sass file
        .pipe(sass()) //compiles sass file
        .pipe(dest('css')) //relative path of folder we want compiled css outputed to
}

function watchTask(){ //actively watches our source sass file and runs buildStyles function 
    watch(['src/**/*.scss'], buildStyles) //array of files to watch and function to run when files change
}

exports.default = series(buildStyles, watchTask)

//run `gulp` command in terminal
