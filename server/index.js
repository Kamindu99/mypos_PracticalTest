const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser =require('body-parser');



app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });

const ProductRoute=require('./routes/ProductRoute');
app.use("/product",ProductRoute);

const InvoiceRoute=require('./routes/InvoiceRoute');
app.use("/invoice",InvoiceRoute);

const InvoiceHedRoute=require('./routes/InvoiceHedRoute');
app.use("/invoicehed",InvoiceHedRoute);