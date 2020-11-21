import { buildTestFastify } from 'test/utils';

describe('app', () => {
  const fastify = buildTestFastify();
  afterAll(() => {
    fastify.close();
  });
  it('should receive a 200 on GET /', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toMatchSnapshot();
  });
  it('should receive a 200 on GET /version', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/version',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toMatchSnapshot();
  });
});
