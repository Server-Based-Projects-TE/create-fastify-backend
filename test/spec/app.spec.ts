import { buildFastify } from 'src/app';

describe('app', () => {
  const fastify = buildFastify();
  afterAll(() => {
    fastify.close();
  });
  it('should return a response on /', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(JSON.stringify({ hello: 'world' }));
  });
});
