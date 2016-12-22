'use strict';

const gulp = require('gulp');
const minify = require('gulp-minify');
const header = require('gulp-header');
const pkg = require('./package.json');
const concat = require('gulp-concat');

const banner = ' /**\n' +
    '* @ngdoc overview\n' +
    '*\n' +
    '* @name <%= pkg.name %>\n' +
    '*\n' +
    '* @author  <%= pkg.author %>\n' +
    '*\n'+
    '* @contributors  <%= pkg.contributors[0].name %>  <<%= pkg.contributors[0].email %>>\n' +
    '*\n' +
    '* @version <%= pkg.version %>\n' +
    '*\n' +
    '* @description\n' +
    '* <%= pkg.description %>\n' +
    '*\n' +
    '* @license\n' +
    '*  Copyright (c) 2016 Fábio Pereira\n' +
    '*\n' +
    '*  Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
    '*  of this software and associated documentation files (the "Software"),\n' +
    '*  to deal in the Software without restriction, including without limitation the rights to use,\n' +
    '*  copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit\n' +
    '*  persons to whom the Software is furnished to do so, subject to the following conditions:\n' +
    '*\n' +
    '*\n' +
    '*  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n' +
    '*\n' +
    '*\n' +
    '*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED\n' +
    '*  TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n' +
    '*  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\n' +
    '*  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n' +
    '*\n' +
    '* ------------------------------------- FOR MORE INFORMATION LOOK: -------------------------------------\n' +
    '* -------------------------- <%= pkg.repository.url %> --------------------------\n' +
    '* ------------------------------------------------------------------------------------------------------\n' +
    '*\n' +
    '*/\n';

    /* Minify JS */
    gulp.task('compress', ()=>{
        gulp.src('dev/*.js')
            .pipe(concat('bundle-graph.js'))
            .pipe(minify({
                ext: {
                    src: '.js',
                    min: '.min.js'
                },
                exclude: ['tasks'],
                ignoreFiles: []
            }))

            .pipe(header(banner, {pkg: pkg}))
            .pipe(gulp.dest('dist/'));
    });