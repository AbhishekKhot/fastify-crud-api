const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 5000;

fastify.register(require('./routes/posts.js'));
fastify.register(require('./routes/admins.js'));

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();