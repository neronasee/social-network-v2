const joi = require('joi');
const bookshelf = require('../../config/bookshelf');

require('./User.model');

module.exports = bookshelf.model('Article', {
  tableName: 'articles',
  users() {
    return this.belongsTo('User');
  },

  validate: {
    slug: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
  },
});
