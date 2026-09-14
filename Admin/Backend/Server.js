require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const VideoRoute = require('./routers/Video');
const EventRoute = require('./routers/Event');
const PromiseRoute = require('./routers/Promise');


const allowedOrigins = [
    'https://www.fggschurch.com',
    'https://fggschurch.com',
    'http://www.fggschurch.com',
    'http://fggschurch.com',
    'https://gsc-alpha.vercel.app',
    'https://gsctvm2026.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:1995'
];

if (process.env.CLIENT_ORIGIN) {
    const extraOrigins = process.env.CLIENT_ORIGIN.split(',').map(o => o.trim());
    allowedOrigins.push(...extraOrigins);
}

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, server-to-server)
        if (!origin) return callback(null, true);

        try {
            const parsedUrl = new URL(origin);
            const hostname = parsedUrl.hostname;

            const isAllowed =
                allowedOrigins.includes(origin) ||
                hostname === 'fggschurch.com' ||
                hostname.endsWith('.fggschurch.com') ||
                hostname.endsWith('.vercel.app') ||
                hostname === 'localhost';

            if (isAllowed) {
                return callback(null, true);
            }
        } catch (e) {
            // invalid URL format
        }

        return callback(null, false);
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


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