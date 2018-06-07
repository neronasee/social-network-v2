const joi = require('joi');
const bookshelf = require('../../config/bookshelf');
require('./Article.model');

module.exports = bookshelf.model('User', {
  tableName: 'users',

  articles() {
    return this.hasMany('Article');
  },

  validate: {
    email: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
  },
});
