const mongoose = require('mongoose'); //for db connection
const URI='mongodb://localhost/mern-todo';
//if DB !exists, -> creates one

mongoose.connect(URI)
    .then(db=>console.log('DB Connected'))
    .catch(err=>console.error(err));

module.exports = mongoose;