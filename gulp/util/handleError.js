var gutil = require('gulp-util');

// handle Gulp stream errors by logging the error and emitting a beep
// prevents Gulp from crashing when a stream errors 
module.exports = function handleError(error) {
  gutil.beep();
  gutil.log(error);
  
  this.emit('end');
};