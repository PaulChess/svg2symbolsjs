const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const svgSymbols = require('gulp-svg-symbols');
const svgSymbols2js = require('gulp-svg-symbols2js');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const fs = require('fs-extra');
const { join } = require('path');

const srcDir = join(__dirname, '../src');
const svgDir = join(__dirname, '../assets/svg');

// 删除之前生成的out和source文件夹
fs.removeSync(`${srcDir}/out`);
fs.removeSync(`${srcDir}/source`);

// 生成svg-symbols.js
gulp.task('exportSvgSymbols', (done) => {
  return gulp
    .src(`${svgDir}/*.svg`)
    .pipe(svgSymbols())
    .pipe(svgSymbols2js())
    .pipe(gulp.dest(`${srcDir}/source`))
    done();
});

// 压缩svg-symbols.js
gulp.task('minifySrc', (done) => {
  return gulp
    .src(`${srcDir}/source/svg-symbols.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${srcDir}/out`))
    done()
});

gulp.task('removeFill', (done) => {
  return gulp
    .src(`${srcDir}/out/svg-symbols.js`)
    .pipe(replace('fill="#000"', ''))
    .pipe(gulp.dest(`${srcDir}/out2`))
    done()
})

gulp.task('default', gulp.series('exportSvgSymbols', 'minifySrc', 'removeFill'));