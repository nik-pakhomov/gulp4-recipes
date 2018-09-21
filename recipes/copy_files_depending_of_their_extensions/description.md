# Copy files depending of their extensions
Sometimes you want to copy files in different folders depends of it`s extensions, not of there path (as gulp does by default). For that custom function in _gulp.dest_ can be used:
```javascript
gulp.task('copy:files', function() {
    return gulp.src(['src/*.js', 'src/*.css'])
               .pipe(gulp.dest(function (file) {
                    return file.extname == '.js' ? 'js' : file.extname == '.css' ? 'css' : 'dest';
        }))
});
```
[Gulpfile](gulpfile.js)