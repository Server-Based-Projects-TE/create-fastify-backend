import { buildFastify } from 'src/app';

describe('routes/sessions', () => {
  const fastify = buildFastify();
  const context = new Map();
  afterAll(async () => {
    fastify.close();
  });
  it('should receive a 401 on GET /me without auth', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/me',
    });
    expect(response.statusCode).toEqual(401);
    expect(response.json()).toMatchSnapshot();
  });
  it('should receive a 400 on POST /login with missing credentials', async () => {
    const response = await fastify.inject({
      method: 'POST',
      payload: { username: 'foo' },
      url: '/login',
    });
    expect(response.statusCode).toEqual(400);
    expect(response.json()).toMatchSnapshot();
  });
  it('should receive a 403 on POST /login with invalid credentials', async () => {
    const response = await fastify.inject({
      method: 'POST',
      payload: { username: 'foo', password: 'qux' },
      url: '/login',
    });
    expect(response.statusCode).toEqual(403);
    expect(response.json()).toMatchSnapshot();
  });
  it('should receive a 200 on POST /login with valid credentials', async () => {
    const response = await fastify.inject({
      method: 'POST',
      payload: { username: 'foo', password: 'bar' },
      url: '/login',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toMatchSnapshot();
    expect(Object.keys(response.headers)).toContain('set-cookie');
    context.set('cookie', response.headers['set-cookie']);
  });
  it('should receive a 200 on GET /me with a valid session', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/me',
      headers: {
        cookie: context.get('cookie').split(';')[0],
      },
    });
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toMatchSnapshot();
    expect(Object.keys(response.headers)).not.toContain('set-cookie');
  });
});
