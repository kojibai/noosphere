import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; // Import the app

// Use chaiHttp for HTTP requests
chai.use(chaiHttp);

const { expect } = chai;

describe('Middleware API Tests', () => {
  it('should return the correct backend URL for valid services', (done) => {
    chai.request(app)
      .post('/api')
      .send({ userInput: 'I need to analyze this data.' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Request routed to http://localhost:5000');
        done();
      });
  });

  it('should return 404 for unknown services', (done) => {
    chai.request(app)
      .post('/api')
      .send({ userInput: 'unknown service input' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal('Service not found');
        done();
      });
  });
});
