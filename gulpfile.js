'use strict';
const gulp = require('gulp');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const streamqueue = require('streamqueue');
const runSequence = require('run-sequence');

const tmpDir = '.tmp';
const distDir = 'dist';

var errorHandler = (error)=> {
    plugins.util.log(error);
};

gulp.task('clean', ()=> {
    return del([`${tmpDir}/*`, `${distDir}/*`]);
});

gulp.task('pages', ()=> {
    let scriptStream = gulp.src('pages/**/*.js')
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.uglify());

    let wxssStream = gulp.src('pages/**/*.wxss')
        .pipe(plugins.cleanCss());

    let wxmlStream = gulp.src('pages/**/*.wxml')
        .pipe(plugins.htmlmin());

    let jsonStream = gulp.src('pages/**/*.json');

    return streamqueue({objectMode: true}, scriptStream, wxssStream, wxmlStream, jsonStream)
        .pipe(gulp.dest(`${distDir}/pages`))
        .on('error', errorHandler);
});

gulp.task('common', ()=> {
    return gulp.src('common/**/*.js')
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(`${distDir}/common`));
});

gulp.task('images', ()=> {
    return gulp.src('images/**/*.*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(`${distDir}/images`))
});

gulp.task('components', ()=> {
    let scriptStream = gulp.src('components/**/*.js')
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.uglify());

    let wxssStream = gulp.src('components/**/*.wxss')
        .pipe(plugins.cleanCss());

    return streamqueue({objectMode: true}, scriptStream, wxssStream)
        .pipe(gulp.dest(`${distDir}/components`))
        .on('error', errorHandler);
});

gulp.task('app', ()=> {
    let scriptStream = gulp.src('app.js')
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.uglify());

    let wxssStream = gulp.src('app.wxss')
        .pipe(plugins.cleanCss());

    let jsonStream = gulp.src('app.json');

    return streamqueue({objectMode: true}, scriptStream, wxssStream, jsonStream)
        .pipe(gulp.dest(`${distDir}`))
        .on('error', errorHandler);
})


gulp.task('build', ()=> {
    runSequence('clean', 'pages', 'common', 'components', 'images', 'app');
});