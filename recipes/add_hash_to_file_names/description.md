# Add hash to file names
## Prerequisites
Install Gulp-Hash plugin:
```
> npm i gulp-hash --save-dev
```

## Description
In production you may want to add hash to JS and CSS files for browsers to update it (not take it from cache), when content of files has been changed.

For server side HTML-rendering you may want also to generate _manifest file_ with info about what files with hash matches files without it. 

[Gulpfile](gulpfile.js)