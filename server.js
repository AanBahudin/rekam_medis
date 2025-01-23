// import library
import 'express-async-errors'
import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

// import middleware
import errorHandler from './errors/ErrorHandler.js'
import { authenticatedUser } from './middleware/authMiddleware.js'

// import route
import { authRoute} from './routes/index.js'
import { adminRoute, dokterRoute, rekamMedisRoute } from './routes/Admin/index.js'


const app = express();
app.use(express.json())
if (process.env.NODE_ENV !== "production") {app.use(morgan("tiny"))}
dotenv.config()
app.use(cookieParser())


// using route
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/admin', authenticatedUser, adminRoute);
app.use('/api/v1/medis', authenticatedUser, rekamMedisRoute);
app.use('/api/v1/dokter', authenticatedUser, dokterRoute)

app.use(errorHandler)

try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(5000, () => {
        console.log("App is listen on port 5000");
    })
} catch (error) {
    console.log(error.message);
}