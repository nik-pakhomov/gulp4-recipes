# Minify graphical images
## Prerequisites
Install Gulp Imagemin plugin:
```
> npm i gulp-imagemin --save-dev
```

## Description
Minify graphical images to reduce it`s size. This operation in many cases takes long time to be done, so for better perfomance will be good to use _gulp-newer_ plugin and _since_ option to prevent minification of all images, and work only with new and those that have been changed.

[Gulpfile](gulpfile.js)