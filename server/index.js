const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');
const userRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use(userRouter);
app.use(todoRouter);

app.listen(port , () => {
    console.log('Started on port ' + port);
});




