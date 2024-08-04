const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

// Import your router from api.js
const router = require('./api.js');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

describe('POST /login', () => {
    test('Login with correct credentials should return status 200', async () => {
        const response = await request(app)
            .post('/login')
            .send({ userId: 'pranjal', password: 'Chico@123' });
        expect(response.statusCode).toBe(200);
    });

    test('Login with incorrect credentials should return status 401', async () => {
        const response = await request(app)
            .post('/login')
            .send({ userId: 'pranjal', password: 'incorrect_password' });
        expect(response.statusCode).toBe(401);
    });
});

describe('POST /signup', () => {
    test('Signup with new user should return status 201', async () => {
        const response = await request(app)
            .post('/signup')
            .send({ userId: 'new1', fullName: 'New1 User', password: 'password@123' });
        expect(response.statusCode).toBe(201);
    });

    test('Signup with existing user should return status 409', async () => {
        const response = await request(app)
            .post('/signup')
            .send({ userId: 'pranjal', fullName: 'Pranjal pimpale', password: 'Chico@123' });
        expect(response.statusCode).toBe(409);
    });
});
