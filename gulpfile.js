var gulp = require("gulp");
var minCss = require("gulp-clean-css");
var htmlMin = require("gulp-htmlmin");
var rename = require("gulp-rename");

var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};

gulp.task("minHtml", function() {
    gulp.src("index.html")
        .pipe(htmlMin(options))
        .pipe(gulp.dest("dist"))
})

 gulp.task("mincss", function() {
     gulp.src("src/css/*.css", { base: 'src' })
         .pipe(minCss())
         .pipe(rename({ suffix: ".min" }))              
         .pipe(gulp.dest("dist"))
 })
 
 gulp.task("default",["minHtml" , "mincss"])
