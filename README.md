## Example Boilerplate

This is an example Boilerplate for using Angular, Gulp, Bower, Karma, Jasmine, Browserify and a local webserver with LiveReload.

Extended to support bower and jasmine tests.  

Changed to always build into ./dist directory, and by default run minified jscript with sourcemaps.  

Default task builds and runs the watcher, browsing to http://localhost:9000 runs the app with live reload enabled
Debug task omits the minification step so that stack trace does not mangle stack traces
Tdd task runs the karma watcher, builds and retests on each change

## Installation

    git clone https://github.com/neilrees/angular-gulp-browserify-livereload-boilerplate.git example-app

    cd example-app

    npm install

    bower install

    gulp [dist|debug]

    
