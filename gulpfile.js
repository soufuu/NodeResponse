var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('default', function(){

   console.log("Hooray ---- It's my first Gulp task");
});

gulp.task('html', function(){
   console.log("Add plugin to Gulp dude!!!")
});

gulp.task('style', function(){
   console.log("Design your own pattern!!!")
});

gulp.task('watch', function(){
   watch('./App/index.html' , function(){
     gulp.start('html');
   });

   watch('./App/assets/styles/**/*.css', function(){
         gulp.start('style');
   });
});
