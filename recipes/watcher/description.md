# Watcher
## Description
To create task that will do some actions when one or several files changed no need to download separate gulp plugin, this functionality in built-in in gulp now.

But the problem with watch is that watcher will run every time after task that it watched for will be end. To prevent watcher to run, need to create separate gulp task that will unite all watchers (see gulpfile for this recipe).

[Gulpfile](gulpfile.js)