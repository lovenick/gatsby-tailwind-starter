class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    isProd &&
      require('cssnano')({
        preset: 'default',
      }),
    isProd &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./public/**/*.html', './src/**/*.js'],
        css: ['./src/css/tailwind.css'],
        whitelist: ['body', 'html'],
        extractors: [
          {
            extractor: TailwindExtractor,
            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ['html', 'js'],
          },
        ],
      }),
    require('autoprefixer')(),
  ],
};
