import Fastify from "fastify";
import { routes } from "./firstRoute.js";


const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3100 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
