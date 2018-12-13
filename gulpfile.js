var gulp = require('gulp');
gulp.task("html",function(){
    gulp.src("html/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\html"));
});
//gulp copy-index

gulp.task("php",function(){
    gulp.src("php/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\php"));
})

gulp.task("favicon",function(){
    gulp.src("favicon/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\favicon"));
})

gulp.task("img1",function(){
    gulp.src("img1/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\img1"))
});
gulp.task("subImg1",function(){
    gulp.src("subImg1/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\subImg1"))
});
gulp.task("css",function(){
    gulp.src("css/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\css"))
});
gulp.task("video",function(){
    gulp.src("video/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\video"))
});
gulp.task("favicon",function(){
    gulp.src("favicon/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\favicon"))
});
gulp.task("font",function(){
    gulp.src("font/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\font"))
});
gulp.task("js",function(){
    gulp.src("js/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\mi\\js"))
});
gulp.task("build",["html","php","favicon","img1","subImg1","css","video","favicon","font","js"],function(){
    console.log("ok");
});
//gulp build
gulp.task("watch",function(){
    gulp.watch("html/**/*",["html"]);
    gulp.watch("php/**/*",["php"]);
    gulp.watch("favicon/**/*",["favicon"]);
    gulp.watch("img1/**/*",["img1"]);
    gulp.watch("subImg1/**/*",["subImg1"]);
    gulp.watch("css/**/*",["css"]);
    gulp.watch("video/**/*",["video"]);
    gulp.watch("favicon/**/*",["favicon"]);
    gulp.watch("font/**/*",["font"]);
    gulp.watch("js/**/*",["js"]);
})
