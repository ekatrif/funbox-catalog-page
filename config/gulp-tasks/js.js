import webpack from "webpack-stream";
import webPackConfig from "../webpack.prod.js";
import babel from "gulp-babel";

export const js = () => {
  return app.gulp
    .src(app.path.src.js)

    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(
      webpack({
        config: webPackConfig,
      })
    )

    .pipe(app.gulp.dest(app.path.build.js));
};
