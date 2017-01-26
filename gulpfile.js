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