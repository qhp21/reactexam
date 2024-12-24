// @ts-check
import fastify from 'fastify';
import response from '../__fixtures__/shoplist.js';

const server = () => {
  const app = fastify();

  app.get('/shoplist', (_req, reply) => {
    reply
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(JSON.stringify(response));
  });

  return app;
};

const port = 3000;

server().listen({ port });
