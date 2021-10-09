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
    return config
  },
}
