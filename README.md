# Bootstrap 4 Generator
A boostrap generator using Boostrap 4 Alpha 6 sass source files and compiled with Gulp for 
sass and es6.

To code and auto-update on non node projects you can use [live-server](http://tapiov.net/live-server/)
```
npm install -g live-server

live-server
// Make sure you're within the proj directory
```

### Index
* [Getting Started](#getting-started)
* [Gulp Tasks](#gulp-ready)
* [Sass](#sass)
* [Ecmascript 2015 / Babel](#ecmascript-2015--babel)

## Included 

Index html file ready with links and scripts linked.

Bootstrap 4 sass files, javascript<br>
jQuery 3.1.1 slim<br>
Tether

Babel for ECMAScript 2015 javascript, ES6
Gulp for custom and Bootstrap sass files

# Getting Started
```git
git clone https://github.com/FernandoBoza/bootstrap-4-generator.git
mv bootstrap-4-generator YOURPROJECT NAME
//change your dir name to yours via cmd line or however
```
```javascript
npm i
gulp serve
// start up gulp watch for all sass and main.js files
```

# Gulp Ready 
you can use gulp ready task to compile and minify your sass and es6 files. It is already set to minify for all files.

```javascript
gulp compile-bs-sass
// compiles bootstrap 4 sass into boostrap.min.css in the css dir

gulp compile-custom-sass
// compiles your own custom sass into custom.min.css in the css dir

gulp concat-js-script
// combines the necessary jQuery, Tether and Bootstrap js in the js dir

gulp transpile-compile-es6
// transpile your es6 javascript code into vanilla js in the js > es2015 dir

gulp watchFile
// Watches and auto compiles bootstrap and custom sass AND transpile es6 code

gulp serve
// Same as above but shorter
```

# Sass
When running gulp serve or watchFile any file you modify within the boostrap 4 or custom sass folder will automatically get compiled and minified to the CSS dir.

If you wish not to have a minified version simply remove
```javascript
    .pipe(sass({outputStyle: 'compressed'}))
```
and change it to 
```
    .pipe(sass()
```

You have the option to change the output style to 
* nested
* compact
* expanded
* compressed

# ECMAScript 2015 / Babel
There is a index.js file for your custom code. If you're writing ES6 code, the gulp serve will transpile and minify it to the dir es2015 within the js dir.

If you're planning on writing good old fashion js code then you can still keep this flow or simply change the script src in index.html from 

```html
    <script src="./js/es2015/index.min.js"></script>

    to

    <script src="./js/index.js"></script>
```

note that it won't get minified, to do so create a new task in the gulpfile like so
```javascript
    gulp.task('minify-js', () => {
    return gulp.src('./js/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./js'));
    });
```