const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');

connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/users',userRoutes);

module.exports = app;



// app.listen(3000,()=>{
//   console.log(`Server is running http`)
// })