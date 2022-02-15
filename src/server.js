const express = require('express');
const morgan = require('morgan'); //for logging
const path = require('path'); //for \ or / conversion

const { mongoose } = require('./database');
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 9999);

//MIDDLEWARES 
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use('/api/tasks', require('./routes/task.routes'));

//SERVER START
const PORT = app.get('port');
app.listen(PORT,()=>{
    console.log(`Server open on localhost:${PORT}`);
});
