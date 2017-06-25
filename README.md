# Bootstrap 4 Generator
A boostrap generator using Boostrap 4 Alpha 6 sass source files and compiled with Gulp for 
sass and es6.

# Gulp Ready 
you can use gulp ready task to compile and minify your sass and es6 files

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