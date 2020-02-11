const path = require('path');
const { src, dest } = require('gulp');
const rename = require('gulp-rename');

const buildPath = path.join(__dirname, '../../project');

function renameTask() {
  return src(['./project/**/*.scss', '!./project/miniprogram/scss/**/*.scss'])
    .pipe(rename({ extname: '.wxss' }))
    .pipe(dest(buildPath));
}

module.exports = renameTask;
