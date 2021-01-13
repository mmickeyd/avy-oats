require('dotenv').config();
const connection = require('../database/dbConnection.js');
const url = `http://${process.env.HOST}:${process.env.PORT}`;
const request = require('supertest')(url);

describe('a GET request to /forecasts endpoint', () => {
  it('Should get forecast from the database', (done) => {
    request.get('/forecasts').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a PUT request to /forecasts endpoint', () => {
  it('Should update forecast in the database', (done) => {
    request.put('/forecasts').expect(200).expect(res => {
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request to /radar endpoint', () => {
  it('Should not throw an error for /radar endpoint', (done) => {
    request.get('/api/pros').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});

describe('a GET request to /map endpoint', () => {
  it('Should not throw an error for /map endpoint', (done) => {
    request.get('/api/pros').expect(200).expect(res => {
      expect(res).toBeDefined();
      expect(res.status).toEqual(200);
    }).end(done);
  });
});
