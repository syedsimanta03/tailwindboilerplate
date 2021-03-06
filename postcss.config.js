const tailwindcss = require('tailwindcss')

//const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const plugins = []
plugins.push(tailwindcss)

  const purgecss = require('@fullhuman/postcss-purgecss')

const TailwindExtractor = (content) => {
  return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
};

  plugins.push(
    purgecss({
      content: ['src/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
    })
  )

module.exports = { plugins }
