# Gulp 4 Recipes
This repo contains a bunch of Gulp 4 _(@next)_ recipes.

## Prerequisites
To work with examples in this repo Gulp 4 should be installed locally or globally:
```
> npm i gulp@next --save-dev
```
If gulp installed locally better decision will be to run it via npm script. To do this add next line to package.json _scripts_ section:
```javascript
"scripts": {
    "gulp": "./node_modules/.bin/gulp"
}
```
After that local gulp can be launched like this:
```
> npm run gulp -v
```

## List of content
* Common
  * [Copy files depending of their extensions](./recipes/copy_files_depending_of_their_extensions/description.md)
  * [Rich gulp output with debug info](./recipes/rich_gulp_output_with_debug_info/description.md)
  * [Add source maps to JS or CSS](./recipes/add_source_maps_to_js_or_css/description.md)
  * [Use different gulp pipeline depends on environment](./recipes/use_different_gulp_pipeline_depends_on_environment/description.md)
  * [Delete files](./recipes/delete_files/description.md)
  * [Watcher](./recipes/watcher/description.md)
  * [Add hash to file names](./recipes/add_hash_to_file_names/description.md)
  * [Copy only files that have been changed](./recipes/copy_only_files_that_have_been_changed/description.md)
  * [Filter only files that have been changed - gulp-newer](./recipes/filter_only_files_that_have_been_changed_gulp_newer/description.md)
* CSS
  * [Less and Autoprefixer](./recipes/less_and_autoprefixer/description.md)
  * [Minify CSS](./recipes/minify_css/description.md)
* JS
* Images
  * [Minify graphical images](./recipes/minify_graphical_images/description.md)