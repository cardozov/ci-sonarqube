const request = require('supertest')
const server = require('../index')

describe('Get Endpoints', () => {

  it('Get', async () => {
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('nome')
  })

})

afterAll(() => server.close())
