import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './src/routes/authRoutes.js';
import channelsRoutes from './src/routes/channelsRoutes.js';
import settingRoutes from './src/routes/settingRoutes.js';

// configDotenv.config();
dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req , res) => {
    return res.send('Hello here is your server')
});

app.use('/api/auth', authRoutes); 
app.use('/api/channels' ,channelsRoutes); 
app.use('/api/settings',settingRoutes);

const server = http.createServer(app);

mongoose
.connect(process.env.MONGO_URI)
.then (() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`)
    });
}).catch((err) => {
     console.log('Database connect failed . Server not started')
     console.log(err);
})



