const mongoose = require('mongoose');

const uri = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost/millionTesouroDireto';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;