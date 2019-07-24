
module.exports = function (app) {
  app.use(require('./login'))
  app.use(require('./comment'))
}
