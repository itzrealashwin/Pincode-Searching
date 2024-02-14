// const express = require('express');
// const buyerroutes = require('./routes/buyerroutes')
// const sellerroutes = require('./routes/sellerroutes')
// const dotenv = require('dotenv');
// const connectdb = require('./config/db');
// const searchroutes = require('./routes/searchroutes');

// dotenv.config();
// connectdb();

// const app = express();
// app.use(express.json());

// const port = process.env.PORT || 5000


// app.get("/", (req,res)=> {
//     res.send("is running");
// })

// app.use('/api/buyer', buyerroutes);
// app.use('/api/seller', sellerroutes);
// app.use('/api/search', searchroutes);


// app.listen(port, () => {
//     console.log(`server is start on ${port}`);
// }) 






const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const buyerroutes = require('./routes/buyerroutes');
const sellerroutes = require('./routes/sellerroutes');
const searchroutes = require('./routes/searchroutes');
const cors = require('cors');  // Import CORS middleware

dotenv.config();
connectdb();

const app = express();
app.use(express.json());
app.use(cors());  // Use CORS middleware to handle cross-origin requests

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use('/api/buyer', buyerroutes);
app.use('/api/seller', sellerroutes);
app.use('/api/search', searchroutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
