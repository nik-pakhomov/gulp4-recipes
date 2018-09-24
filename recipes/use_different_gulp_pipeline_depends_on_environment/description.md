# Use different gulp pipeline depends on environment
## Prerequisites
Install Gulp-If plugin:
```
> npm i gulp-if --save-dev
```

## Description
Sometimes depends on environment you may want to launch different gulp pipeline. This can be done without plugins, but with _gulp-if_ code of gulp file looks more natural.

In the example source maps adds only in development environment.

[Gulpfile](gulpfile.js)