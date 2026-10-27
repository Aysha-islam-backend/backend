import express from 'express';
import dotenv from'dotenv'
import { connectDb } from './src/config/db.js';


 dotenv.config()

const app = express();
const port = process.env.PORT
//connect db
await connectDb()

app.get('/', (req, res) => {
  res.status(200).json({
    success:true,
    message:'server is healthy',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});