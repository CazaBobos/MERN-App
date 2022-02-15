const express = require('express');
const morgan = require('morgan'); //for logging
const path = require('path'); //for \ or / conversion

const { mongoose } = require('./database');
const app = express();

//#region SETTINGS
app.set('port', process.env.PORT || 9999);
//#endregion

//#region MIDDLEWARES 
app.use(morgan('dev'));
app.use(express.json());
//#endregion

//#region ROUTES
app.use('/api/tasks', require('./routes/task.routes'));
//#endregion

//#region STATIC FILES
const location = path.join(__dirname, 'public');
app.use(express.static(location));
//#endregion

//SERVER START
const PORT = app.get('port');
app.listen(PORT,()=>{
    console.log(`Server open on localhost:${PORT}`);
});
