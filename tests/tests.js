import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /, /404, /api/v1', () => {
  it('should return the index page', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        done(err);
      });
  });

  it('should return the API page', (done) => {
    chai
      .request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        done(err);
      });
  });

  it('should return an error for any invalid route', (done) => {
    chai
      .request(app)
      .get('/404')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });
});

describe('routes: /auth', () => {
  context('POST /auth/signup', () => {
    const userData = {
      firstName: 'Robert',
      lastName: 'Ndirangu',
      address: 'HSe Number 25 Mutha Street, Embu, Kenya',
      email: 'robakadi@gmail.com',
      password: 'secret',
    };

    it('should create a new user', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.be.equal(201);
          expect(res.body.data).to.have.property('token');
          done(err);
        });
    });

    specify.skip('error for already existing user with email', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(409);
          expect(res.body.status).to.be.equal(409);
          expect(res.body.data).to.have.property('error');
          done(err);
        });
    });

    specify('error when user signs up with empty last name', (done) => {
      userData.lastName = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          expect(res.body.error).to.equal('You need to include a valid last name');
          done(err);
        });
    });

    specify('error when user signs up with empty first name', (done) => {
      userData.firstName = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          expect(res.body.error).to.equal('You need to include a valid first name');
          done(err);
        });
    });
    
    specify('error when user signs up with empty address', (done) => {
      userData.address = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          console.log(res.body.error);
          expect(res.body.error).to.equal('You need to include a valid address');
          done(err);
        });
    });

    /*specify('error when user signs up with empty email', (done) => {
      userData.email = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          done(err);
        });*/
    });
    specify('error when user signs up with empty nickname', (done) => {
      userData.email = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          done(err);
        });
    });

    specify('error when user signs up with empty password', (done) => {
      userData.password = '';
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(userData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          done(err);
        });
    });
  });

  context('POST /auth/signin', () => {
    it('should login user if details are valid', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'meetdesmond.edem@gmail.com',
          password: 'admin',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.be.equal(200);
          expect(res.body.data).to.have.property('token');
          done(err);
        });
    });

    specify('error if email is not provided', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({ email: '', password: '1234345' })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          done(err);
        });
    });

    specify('error if password is not provided', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({ email: 'meetdesmond.edem@gmail.com', password: '' })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.status).to.be.equal(400);
          expect(res.body).to.have.property('error');
          done(err);
        });
    });

    specify('error if user does not exist', (done) => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({ email: 'randomuser@email.com', password: '2232323' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.be.equal(404);
          expect(res.body).to.have.property('error');
          done(err);
        });
    });
  });
});
