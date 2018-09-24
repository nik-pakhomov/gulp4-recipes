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
* CSS
  * [Less and Autoprefixer](./recipes/less_and_autoprefixer/description.md)
* JS