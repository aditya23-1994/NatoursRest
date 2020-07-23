
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1:) Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use((req,res,next) => {
    console.log("HEllo from the middleware 👹");
    next();
});

// 4:) Mounting the Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;


