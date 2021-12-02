const { src, dest, series } = require('gulp')
const clean = require('gulp-clean')

function remove(cb)
{
  src('www/**/*', { read: false })
  .pipe(clean({ force: true }))

  cb()
}

function copy(cb)
{
  src('dist/**/*')
  .pipe(dest('www'))

  cb()
}

exports.remove = remove
exports.copy = copy
exports.default = series(remove, copy)
