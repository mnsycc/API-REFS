// конфигурация базы данных
module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/myapp',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  },
};
