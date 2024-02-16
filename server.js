
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ConnectDatabase = require('./config/Database');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from localhost:3000
  };
  
  // Use cors middleware with specific options
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
// const ConnectDatabase =  mongoose.connect(process.env.MONGODB_URI ).then((con)=>{
//     console.log("mongo db connected successfully" + con.connection.host )
// });
ConnectDatabase();
// Routes
const colorsRoute = require('./routes/colors');
const colorDetailRoute = require('./routes/colorDetail');



app.use('/api/colors', colorsRoute);
app.use('/api/colorDetail', colorDetailRoute);

// Start Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
