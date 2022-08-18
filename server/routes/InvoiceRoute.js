const express = require("express");
const mysql = require("mysql");
const router =express.Router();

const db = mysql.createPool({
  host: "localhost", 
  user: "user",
  password: "1234",
  database: "test_db"
});


router.post("/add", (req, res) => {
  const Invoice_Details_Id = req.body.Invoice_Details_Id;
  const Invoice_Details_qty = req.body.Invoice_Details_qty;
  const Invoice_Details_amount = req.body.Invoice_Details_amount;
  const Invoice_Hed_Invoice_Hed_id = req.body.Invoice_Hed_Invoice_Hed_id;
  const Products_Products_id = req.body.Products_Products_id;

  db.query(
    "INSERT INTO invoice_details (Invoice_Details_Id, Invoice_Details_qty , Invoice_Details_amount , Invoice_Hed_Invoice_Hed_id, Products_Products_id ) VALUES (?,?,?,?)",
    [Invoice_Details_Id, Invoice_Details_qty, Invoice_Details_amount, Products_qty ,Invoice_Hed_Invoice_Hed_id,Products_Products_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM invoice_details", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


module.exports=router;