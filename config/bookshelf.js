const config = require('./index');
const knex = require('knex')(config.db);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');
bookshelf.plugin('visibility'); // bookshelf-advanced-serialization
bookshelf.plugin('bookshelf-camelcase');
bookshelf.plugin(require('bookshelf-modelbase').pluggable);

module.exports = bookshelf;
