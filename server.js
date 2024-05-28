import express from 'express';
import dotenv from 'dotenv';
import dbConnection from "./config/db.js";
import router from './routers/userRoute.js';

const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/v1/user', router)

// Database
dbConnection();
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on port ${process.env.PORT}`);
})