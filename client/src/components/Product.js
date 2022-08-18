import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [Products_id, setID] = useState("");
  const [Products_Name, setName] = useState("");
  const [Products_price, setPrice] = useState("");
  const [Products_qty, setQty] = useState("");

  const onSubmit = async () => {
    await axios
      .post("http://localhost:3001/product/add", {
        Products_id: Products_id,
        Products_Name: Products_Name,
        Products_price: Products_price,
        Products_qty: Products_qty,
      })
      .then(() => {
        alert("Successfully Add a new Product");
        window.location.reload();
      });
  };

  const onUpdate = (id) => {
    axios
      .put("http://localhost:3001/product/update", {
        Products_id: Products_id,
        Products_Name: Products_Name,
        Products_price: Products_price,
        Products_qty: Products_qty,
      })
      .then(() => {
        alert("Successfully Update Product Details");
        window.location.reload();
      });
  };
  
  const onClear = () => {
    setID("");
    setName("");
    setPrice("");
    setQty("");
  };

  return (
    <div className="pagemargin page">
      <div>
        <br />

        <br />

        <div className="container">
          <div
            className="w-75 mx-auto shadow p-5"
            style={{ backgroundColor: "hsl(120,100%,5%,0.1)" }}
          >
            <h2 className="text-center mb-5">Product</h2>

            <form
              style={{ fontSize: "20px" }}
              class="signup-form"
              onSubmit={(e) => onSubmit(e)}
              encType="multipart/form-data"
            >
              <div className="form-group row" controlId="validationCustom01">
                <label for="inputEmail3" class="col-sm-4 col-form-label">
                  Enter Product Id :-
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter product ID"
                    name="Products_id"
                    value={Products_id}
                    onChange={(event) => {
                      setID(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label for="inputEmail3" class="col-sm-4 col-form-label">
                  Enter Product Name :-
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter Product Name"
                    name="Products_Name"
                    value={Products_Name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label for="inputEmail3" class="col-sm-4 col-form-label">
                  Enter Products Price :-
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Price"
                    name="Products_price"
                    value={Products_price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <label for="inputEmail3" class="col-sm-4 col-form-label">
                  Enter Products Qty :-
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Product Qty"
                    name="Products_qty"
                    value={Products_qty}
                    onChange={(event) => {
                      setQty(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <br />
              <button
                style={{ fontSize: "20px" }}
                className="btn btn-light btn-block"
                type="submit"
              >
                Save
              </button>

              <button
                style={{ fontSize: "20px" }}
                onClick={() => {
                  onUpdate(Products_id);
                }}
                className="btn btn-light btn-block"
                type="button"
              >
                Update
              </button>
              <button
                style={{ fontSize: "20px" }}
                onClick={onClear}
                className="btn btn-light btn-block"
                type="button"
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
