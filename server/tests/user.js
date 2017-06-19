const app = require('../app');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('User list API Integration Tests', () => {
  let newUser = {
    username: 'Victoria',
    email: 'offoma.victoria@gmail.com',
    password: 'vivavictoria'
  };

  let oldUser = {
    username: 'esme',
    password: 'esmelovesmummy'
  };

  describe('#POST Register User', () => {
    it('should create new user', (done) => {
      request(app).post('/api/user/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.username).to.equal('Victoria');
        newUser = res.body;
        done();
      });
    });
  });

  describe('#POST Authenticate User', () => {
    it('should authenticate user', (done) => {
      request(app).post('/api/user/signin')
      .send(oldUser)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body.username).to.equal('esme');
        oldUser = res.body;
        done();
      });
    });
  });
});
