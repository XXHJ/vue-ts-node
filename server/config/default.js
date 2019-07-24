module.exports = {
  port: 3000,
  session: {
    secret: 'ledng',
    key: 'ledng',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/ledng'
}
