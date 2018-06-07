const User = require('../models/User.model');

module.exports = {
  async list(ctx) {
    const users = await User.findAll();

    ctx.body = {
      data: users.toJSON(),
    };
  },

  async create(ctx) {
    const user = await User.create(ctx.request.body);

    ctx.body = {
      data: user,
    };
  },
};
