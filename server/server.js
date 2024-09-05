const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')

mongoose.connect('mongodb+srv://byte-commerce:byte-commerce@cluster0.t4xkx.mongodb.net/').then(() => console.log('Mongodb connected')).catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
      origin: 'http://localhost:5173', // The front-end origin
      methods: ['GET', 'POST', 'DELETE', 'PUT'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
      ],
      credentials: true, // This allows the browser to send cookies with requests
    })
  );
  

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))