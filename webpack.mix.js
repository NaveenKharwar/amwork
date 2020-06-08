let mix = require('laravel-mix');

mix.js('src/js/script.js', 'dist/js/')
    .sass('src/scss/style.scss', 'dist/css/')
    .options({
        processCssUrls: false
    })
    .copy('src/assets/**/*', 'dist/assets', false)
    .disableNotifications();
