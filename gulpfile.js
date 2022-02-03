const gulp        = require("gulp")
const sass        = require("gulp-sass")(require("sass"))
const imagewebp   = require("gulp-webp")
const prefix      = require("gulp-autoprefixer")
const cssMinify   = require("gulp-clean-css")
const terser      = require("gulp-terser")
const babel       = require("gulp-babel")
const rename      = require("gulp-rename")
const maps        = require("gulp-sourcemaps")
const browserify  = require("browserify")
const Babelify    = require("babelify")
const source      = require("vinyl-source-stream")
const buffer      = require('vinyl-buffer')


const jsTasks = [
    {name: "paperui", path: "js/paperui.js", pattern: "js/**/*.js"},
]

const sassTasks = [
    {name: "paperui", path: "scss/paperui.scss", pattern: "scss/**/*.scss"},
]


function transpileSass(cb, task) {
    let t = gulp.src(task.path)
        .pipe(sass())
        .pipe(prefix())
        .pipe(cssMinify())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(gulp.dest("dist/css"))
    if (cb == null) return t
    cb()
}


function transpileJS(cb, task) {
    let t = browserify({
            entries: [task.path],
        })
        .transform(Babelify, {presets: ["@babel/preset-env"]})
        .bundle()
        .pipe(source(task.name + ".js"))
        .pipe(buffer())
        .pipe(terser())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(gulp.dest("dist/js"))
    if (cb == null) return t
    cb()
}


function transpileWebP(cb, task) {
    let t = gulp.src(task.path)
        .pipe(imagewebp())
        .pipe(gulp.dest("dist/images"))
    if (cb == null) return t
    cb()
}


const allTaskNames = [...jsTasks, ...sassTasks].map(task => {
    if (task.path.endsWith(".js")) {
        return "js-" + task.name
    } else if (task.path.endsWith(".scss")) {
        return "sass-" + task.name
    }
})

for (let task of jsTasks) {
    gulp.task("js-" + task.name, cb => transpileJS(cb, task))
}

for (let task of sassTasks) {
    gulp.task("sass-" + task.name, cb => transpileSass(cb, task))
}


function watch() {
    for (let task of jsTasks) {
        gulp.watch(task.pattern, gulp.series("js-" + task.name))
    }

    for (let task of sassTasks) {
        gulp.watch(task.pattern, gulp.series("sass-" + task.name))
    }
}


gulp.task("default", gulp.series(...allTaskNames))
gulp.task("watch", gulp.series("default", watch))
