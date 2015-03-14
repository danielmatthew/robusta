module.exports = {
  'secret': 'ooD7EZVksjFyB4yZ',
  'port': process.env.PORT || 3000,
  'database': 'mongodb://coffee_user:FCj4avfZG2rT@ds039291.mongolab.com:39291/coffee',
  'options': {
    server: {
      socketOptions: {
        keepAlive: 1,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 1,
        connectTimeoutMS: 30000
      }
    }
  }
};
