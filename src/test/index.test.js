const request = require('supertest')
const server = require('../index')

describe('Get Endpoints', () => {
  it('should return 200 with body from /', async () => {
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('nome')
  })

  it('should return 200 with body from /health', async () => {
    const res = await request(server).get('/health')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('status')
  })

  it('should return 500 with body from /error', async () => {
    const res = await request(server).get('/error')
    expect(res.statusCode).toEqual(500)
    expect(res.body).toHaveProperty('status')
  })

  it('should return 200 with body from /timeout', async () => {
    const res = await request(server).get('/timeout')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('status')
  }, 2500)

  it('should return 404 from /notfound', async () => {
    const res = await request(server).get('/notfound')
    expect(res.statusCode).toEqual(404)
  })
})

afterAll(() => server.close())
