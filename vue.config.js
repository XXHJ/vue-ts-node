module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        ws: false, // proxy websockets
        target: 'http://localhost:3001'
      }
    }
  }
}
