const mongoose = require('mongoose');

"mongodb+srv://rdupont:Foot9898@cluster0.8o3ai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = mongoose.connection;
