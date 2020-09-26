# Photosure Web UI
This project represents the web UI portion of
Photosure. It is a ClojureScript single-page web application that uses
Reagent, a React JS wrapper.

## Development

### Compiling Sass

First, install Sass: https://github.com/sass/dart-sass
Then:
```
lein sass-watch
```

### REPL
In a separate terminal:
```
lein repl

;; Run ClojureScript compiler in the background and start the HTTP server
=> (start)

;; Restart the HTTP server
=> (restart)

;; Stop the ClojureScript compiler and HTTP server
=> (stop)
```

### Running

If you want to compile ClojureScript and run the HTTP server outside
of the REPL:

```
sass rsrc/sassc/app.scss rsrc/public/css/app.css
lein cljsbuild once
lein run
```
