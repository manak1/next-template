const path = require('path')

module.exports = {
  reactStrictMode: true,
  eslint: {
    eslint: {
      dirs: ['src/components', 'src/hooks', 'src/pages'],
    },
  },
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  sassOptions: {
    prependData: '@import "./src/assets/styles/_index.scss";',
  },
}
