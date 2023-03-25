const request = require('supertest')
const server = require('../index')

describe('Get Endpoints', () => {
  it('should return 404 from /notfound', async () => {
    const res = await request(server).get('/notfound')
    expect(res.statusCode).toEqual(404)
  })
})

afterAll(() => server.close())
