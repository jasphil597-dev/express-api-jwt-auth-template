const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles.js');

// ... other middleware

// Routes go here

let PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// ... other middleware
app.use(express.json());

app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

// Routes go here

app.listen(PORT, () => {
	console.log(`localhost:${PORT} `);
});
