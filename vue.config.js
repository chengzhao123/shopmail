module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'conmmon': '@/conmmon',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}