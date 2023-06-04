const basicGet = require('./routes/basic-get');
module.exports = require('express').Router()
  .use('/basic-get', basicGet)