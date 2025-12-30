require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const VideoRoute = require('./routers/Video');
const EventRoute = require('./routers/Event');
const PromiseRoute = require('./routers/Promise');


const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173', 'https://yourdomain.com', 'https://your-vercel-app.vercel.app'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log("MongoDB Not Connected", err)
})


app.get('/', (req, res) => {
    res.send("Jesus the Great...")
})

app.use('/api/video', VideoRoute);
app.use('/api/event', EventRoute);
app.use('/api/promise', PromiseRoute);


app.listen(1995, () => {
    console.log("Server is Running on port 1995");
})