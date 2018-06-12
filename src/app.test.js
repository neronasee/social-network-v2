const request = require('supertest');
const app = require('./app');

let server;

beforeEach(() => {
  server = app.listen(5000);
});

afterEach(() => server.close());

describe('test the root path', () => {
  test('it should respond with data', async () => {
    const response = await request(server).get('/healthcheck');
    expect(response.statusCode).toBe(200);
  });
});
