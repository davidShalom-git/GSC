require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const VideoRoute = require('./routers/Video');
const EventRoute = require('./routers/Event');
const PromiseRoute = require('./routers/Promise');


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log("MongoDB Not Connected", err)
})



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.send("Jesus the Great...")
})

app.use('/api/video', VideoRoute);
app.use('/api/event', EventRoute);
app.use('/api/promise', PromiseRoute);



app.listen(1995,()=> {
    console.log("Server is Runnning on port 1995");
})