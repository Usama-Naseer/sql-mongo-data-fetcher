const express = require("express");
require("dotenv").config();

const sqlRouter = require("./routes/sql");
const mongoRouter = require("./routes/mongo");

const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));

app.use('/sql',sqlRouter);

app.use('/mongo',mongoRouter);


 

app.listen(PORT,()=>{
    console.log('backend');
});