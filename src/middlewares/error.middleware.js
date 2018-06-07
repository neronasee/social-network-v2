module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const { name, detail, isJoi } = err;

    ctx.app.emit('error', err, ctx);
    ctx.status = err.status || 500;

    if (name === 'error' && detail) {
      ctx.status = 400;
      ctx.body = { error: detail };
    } else if (isJoi) {
      ctx.status = 400;
      ctx.body = {
        error: err.details.reduce((acc, { message }) => {
          return `${acc}${message.replace(/"/g, "'")} `;
        }, ''),
      };
    } else {
      ctx.body = 'Internal error';
    }
  }
};
