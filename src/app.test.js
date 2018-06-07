const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('test the root path', () => {
  test('it should respond with data', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
  });
});
