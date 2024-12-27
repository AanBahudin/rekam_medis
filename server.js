// import library
import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import mongoose from 'mongoose';

// import route
import { authRoute, rekamMedisRoute } from './routes/index.js'

// express init
const app = express();

// using lib
app.use(express.json())
if (process.env.NODE_ENV !== "production") {app.use(morgan("combined"))}
dotenv.config()

// route
app.get('/', (req, res) => {
    res.send("Hello There Mate, this is from express js and node js server!");
})
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/medis', rekamMedisRoute);


try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(5000, () => {
        console.log("App is listen on port 5000");
    })
} catch (error) {
    console.log(error.message);
}