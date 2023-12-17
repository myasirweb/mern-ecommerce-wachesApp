import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path'


//configure env 
dotenv.config();

//..rest object..//
const app = express();
//database config

connectDB();

///middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
app.use(express.static(path.join(__dirname, "./client/build")))


//..rest api..//
app.use('*', function (req,res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

//PORT 
const PORT = process.env.PORT || 3000;

//run listen

app.listen(PORT, () =>{
   console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})