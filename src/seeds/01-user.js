const faker = require('faker');

const getUsers = () =>
  Array.from(
    {
      length: 10,
    },
    () => ({
      username: faker.name.firstName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
      bio: faker.lorem.sentences(),
      password: faker.internet.password(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
  );

exports.getUsers = getUsers;

exports.seed = knex =>
  knex('users')
    .del()
    .then(() => knex('users').insert(getUsers()));
