// import library
import 'express-async-errors'
import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import middleware
import errorHandler from './errors/ErrorHandler.js'
import { authenticatedUser, authorizedAdminPermission, authorizeDokterPermission } from './middleware/authMiddleware.js'

// import route
import { authRoute} from './routes/index.js'
import { adminRoute, dokterRoute as dokterDataRoute, rekamMedisRoute } from './routes/Admin/index.js'
import dokterRoute from './routes/Dokter/dokterRoute.js'


const app = express();
app.use(express.json())
if (process.env.NODE_ENV !== "production") {app.use(morgan("tiny"))}
dotenv.config()
app.use(cookieParser())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

app.use(express.static(path.resolve(__dirname, './client/dist')));

// auth route
app.use('/api/v1/auth', authRoute);

// admin route
app.use('/api/v1/admin', authenticatedUser, authorizedAdminPermission, adminRoute);
app.use('/api/v1/medis', authenticatedUser, authorizedAdminPermission, rekamMedisRoute);
app.use('/api/v1/dokter/data', authenticatedUser, authorizeDokterPermission, dokterRoute)
app.use('/api/v1/dokter', authenticatedUser, authorizedAdminPermission, dokterDataRoute);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})

app.use(errorHandler)

try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(5000, () => {
        console.log("App is listen on port 5000");
    })
} catch (error) {
    console.log(error.message);
}