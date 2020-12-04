let Encore = require("@symfony/webpack-encore");

// It"s useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
    .setOutputPath("public/build")
    .setPublicPath("/build")
    .addEntry("app", "./frontend/src/index.tsx")
    .addStyleEntry('css/app', './assets/css/app.scss')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel(() => {}, {
        useBuiltIns: "usage",
        corejs: 3
    })
    .enableSassLoader(sassOptions => {
    }, {
        resolveUrlLoader: false
    })
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            path: './postcss.config.js'
        };
    })
    .enableTypeScriptLoader()
    .enableReactPreset()
;

module.exports = Encore.getWebpackConfig();