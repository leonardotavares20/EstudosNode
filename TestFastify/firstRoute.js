import Fastify from "fastify";
import { DatabaseConnector } from "./databaseConnector.js";

const database = new DatabaseConnector();

const fastify = Fastify({
  logger: true,
});
export async function routes(fastify, options) {
  fastify.get("/videos", async (request, reply) => {
    const querySearch = request.query.search;
    const videos = database.list(querySearch);

    return reply.send(videos);
  });

  fastify.post("/videos", async (request, reply) => {
    const { title, description, duration } = request.body;

    database.create({
      title,
      description,
      duration,
    });

    return reply.status(201).send({ message: "Video criado com sucesso" });
  });

  fastify.put("/videos/:id", async (request, reply) => {
    const { title, description, duration } = request.body;
    const id = request.params.id;

    database.update(id, { title, description, duration });

    return reply.status(204).send();
  });

  fastify.delete("/videos/:id", async (request, reply) => {
    const id = request.params.id;

    database.delete(id);

    return reply.status(204).send();
  });
}
