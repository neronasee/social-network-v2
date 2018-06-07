const faker = require('faker');
const _ = require('lodash');

const getArticles = userIds =>
  _.flatMap(userIds, userId =>
    Array.from({ length: 3 }, () => ({
      user_id: userId,
      title: faker.lorem.sentences(2),
      slug: faker.lorem.sentence(),
      body: faker.lorem.sentences(2),
      description: faker.lorem.sentences(2),
    }))
  );

exports.seed = async knex => {
  const ids = await knex.table('users').pluck('id');

  return knex('articles')
    .del()
    .then(() => knex('articles').insert(getArticles(ids)));
};
