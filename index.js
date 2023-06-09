const express = require('express');
var cors = require('cors')
require('dotenv').config();
const ConnDB = require('./config/database')
const app = express();

const cookieParser =  require("cookie-parser");
// const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookieParser());
ConnDB();
app.use(cors());
const PORT = process.env.PORT || 5000
const user = require('./routes/userRoute');

const posts = require('./routes/postRoutes')
const comments = require('./routes/commentRoute')

// app.use('/api/v1',user);
app.use('/api/users',user);
app.use('/api/blog',posts,comments);



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
