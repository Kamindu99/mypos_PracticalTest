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
  const Invoice_Hed_id = req.body.Invoice_Hed_id;
  const Invoice_Hed_Date = req.body.Invoice_Hed_Date;
  const Invoice_Hed_Amount = req.body.Invoice_Hed_Amount;
  const Invoice_Hed_customer = req.body.Invoice_Hed_customer;

  db.query(
    "INSERT INTO invoice_hed (Invoice_Hed_id, Invoice_Hed_Date , Invoice_Hed_Amount , Invoice_Hed_customer) VALUES (?,?,?,?)",
    [Invoice_Hed_id, Invoice_Hed_Date, Invoice_Hed_Amount, Invoice_Hed_customer],
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
  db.query("SELECT * FROM invoice_hed", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


module.exports=router;