const mongoose = require('mongoose')

const connectDatabase = () => {
     mongoose.connect(process.env.MONGODB_URI).then((con) => {
        { useNewUrlParser: true } 
       console.log("mongodb connected to the host :" + con.connection.host)
    })

}

module.exports = connectDatabase;