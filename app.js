// require the database
const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/task');
const PageNotFound = require('./middleware/pageNotFound');
const errorHandler = require('./middleware/error_handler');
require('dotenv').config();
// const port = 5000;
const port = process.env.PORT || 5001;


// middlesware
app.use(express.json());
// app.use(PageNotFound);
app.use(express.static('./public'));
app.use(errorHandler)

// route
    app.use('/api/v1/tasks', tasks);

//app.get('api/v1/tasks') -   get all the tasks
//app.post('api/v1/tasks') -   create a new task
//app.get('api/v1/tasks/:id') -   get a single tasks
//app.patch('api/v1/tasks/:id') -   update task
//app.delete('api/v1/tasks/:id') -   delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`Server listening to port ${port}`)
        });
    } catch (error) {
        console.log(error)
    }
}


start();