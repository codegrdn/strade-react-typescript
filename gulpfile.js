const {
    series,
    parallel,
    src,
    dest,
    watch,
    lastRun
} = require('gulp');
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const del = require("del");
const sync = require("browser-sync").create();

const mode = process.env.MODE || 'development';

// Styles

const styles = () => {
    return gulp.src("source/sass/*.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(postcss([
            autoprefixer(),
            csso()
        ]))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("src/assets/css"))
        .pipe(sync.stream());
}

exports.styles = styles;

// Scripts

// const scripts = () => {
//   return gulp.src("source/js/main.js")
//     .pipe(terser())
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(gulp.dest("build/js"))
//     .pipe(sync.stream());
// }

// exports.scripts = scripts;

// Clean

const clean = () => {
    return del("src/assets/css");
};

// Build

const build = gulp.series(
    clean,
    gulp.parallel(
        styles
    ));

exports.build = build;

// Default

exports.default = gulp.series(
    clean,
    gulp.parallel(
        styles,
    )
);