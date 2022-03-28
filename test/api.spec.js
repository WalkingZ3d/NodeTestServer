const request = require('supertest');
const app = require('../app');

describe('API Server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running at port 5000!');
        })
    });
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });
    it('respons to get / with a status of 200', (done) => {
        request(api).get('/').expect(200, done);
    });
    it('respons to get /dogs with a status of 200', (done) => {
        request(api).get('/dogs').expect(200, done);
    });
    it('retrieves a dog by id', (done) => {
        request(api)
        .get('/dogs/1')
        .expect(200)
        .expect({id:1, name:'Dog1', age:3}, done)
    })
});
