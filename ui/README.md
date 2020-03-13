# Photosure Web UI
This project represents the web UI portion of
Photosure. It is a ClojureScript single-page web application that uses
Reagent, a React JS wrapper.

## Development

### Compiling Sass
First, install Sass: https://github.com/sass/dart-sass
```
sass --watch rsrc/sassc/app.scss rsrc/public/css/app.css
```

### REPL
In a separate terminal:
```
lein repl

;; Run ClojureScript compiler in the background
=> (require '[cljsbuild.core :as cljs])
=> (cljs/build-watch)

;; Run the HTTP server
=> (require '[photosure.app :as app])
=> (app/start)

;; Restart the HTTP server
=> (app/restart)

;; Stop the HTTP server
=> (app/stop)

;; Stop the ClojureScript compiler
=> (cljs/stop)
```

### Running
If you just want to compile ClojureScript and run the HTTP server outside of the REPL:
```
lein cljsbuild once
lein run
```
