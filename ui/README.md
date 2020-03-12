# Photosure Web UI
This project represents the web UI portion of
Photosure. It is a ClojureScript single-page web application that uses
Reagent, a React JS wrapper.

## Development

### Compiling ClojureScript
```
lein cljsbuild once
```

### Compiling Sass
```
sassc -t compact ui/rsrc/sassc/app.scss ui/rsrc/public/css/app.css
```

### Running the HTTP Server
```
lein run
```