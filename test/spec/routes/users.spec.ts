import { buildTestFastify } from 'test/utils';

describe('app', () => {
  const fastify = buildTestFastify({ bypassAuth: true });
  afterAll(() => {
    fastify.close();
  });
  it('should receive a 200 on GET /users', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/users',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toMatchSnapshot();
  });
});
