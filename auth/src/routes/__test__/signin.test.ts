import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
    jest.setTimeout(50000);
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(400);
})

it('fails when an incorrect password is supplied', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'tests@test.com',
        password: 'password'
    })
})