const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const connectDB = require("./config/db");

// dot config 
dotenv.config();

// mongoDB connection 
connectDB();

// rest object 
const app = express();

// middleware 
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// routes 
app.use('/api/v1/test',require('./routes/testRoutes'));
app.use("/api/v1/auth",require("./routes/authRoutes"));
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })


// port 
const PORT = process.env.PORT || 8080;

// listen 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});



