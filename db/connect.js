     const mongoose = require('mongoose');

   
     const connectDB = (url) => {
         return  mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
         })
     }

     module.exports = connectDB;

    //  mongoose.connect(connectingString, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true,
    //  })
    //  .then(()=> console.log('CONNECTING TO THE DATABASE......'))
    //  .catch((err) => console.log(err))

    //  myFirstDatabase