
var fileinclude = require('gulp-file-include'),
gulp = require('gulp');
 
gulp.task('default', function(done) {
  gulp.src(['index.html','admin.html','user.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public'));
    done();
});