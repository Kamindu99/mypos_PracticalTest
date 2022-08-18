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
  const Products_id = req.body.Products_id;
  const Products_Name = req.body.Products_Name;
  const Products_price = req.body.Products_price;
  const Products_qty = req.body.Products_qty;

  db.query(
    "INSERT INTO products (Products_id, Products_Name , Products_price , Products_qty) VALUES (?,?,?,?)",
    [Products_id, Products_Name, Products_price, Products_qty],
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
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/update", (req, res) => {
  const id = req.body.pid;
  const name = req.body.name;
  const price = req.body.price;
  const qty = req.body.qty;
  db.query(
    "UPDATE products SET (Products_Name = ?,Products_price = ?,Products_qty = ? ) WHERE Products_id = ?",
    [name,price,qty, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports=router;