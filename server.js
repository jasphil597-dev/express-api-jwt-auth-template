const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles.js');
const cors = require('cors');

// ... other middleware

// Routes go here

let PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Routes go here
app.use(cors('*'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'I am In!' });
});

// ... other middleware

app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

app.listen(PORT, () => {
	console.log(`localhost:${PORT} `);
});
