const { mix } = require('laravel-mix');
let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.sourceMaps();
   
mix.webpackConfig({
    output: {
        //path: 'public/',
        publicPath: '/',
        chunkFilename: "js/chunks/[id].js"
    },
    plugins: [
        new ImageminPlugin( {
            //disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100',
            },
            test: /\.(jpe?g|png|gif|svg)$/i,
        } ),
    ],
});

mix.copy( 'resources/assets/images', 'public/images', false );


mix.browserSync({
    proxy: 'beantowers.dev',
    browser: "firefoxdeveloperedition"
});
