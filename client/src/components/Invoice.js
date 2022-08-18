import React, { useState } from "react";
import axios from "axios";

export default function Invoice() {
  const todate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const [invoice, setInvoice] = useState({
    Invoice_Hed_Date: "",
    Invoice_Details_Id: "",
    Invoice_Hed_customer: "",
    Products_Products_id: "",
    Invoice_Details_amount: "",
    Invoice_Details_qty: "",
    Invoice_Hed_Amount: "",
    Products_Name: "",
    Products_price: "",
  });

  const [invoiceall, setInvoiceList] = useState([]);

  const {
    Invoice_Hed_Date,
    Invoice_Details_Id,
    Invoice_Details_qty,
    Invoice_Hed_Amount,
    Invoice_Hed_customer,
    Invoice_Details_amount,
    Products_Products_id,
    Products_Name,
    Products_price,
  } = invoice;

  const changeonclick = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/invoicehed/add", {
      Invoice_Hed_Date: Invoice_Hed_Date,
      Invoice_Hed_Amount: Invoice_Hed_Amount,
      Invoice_Hed_customer: Invoice_Hed_customer,
    });

    await axios
      .post("http://localhost:3001/invoice/add", {
        Invoice_Details_Id: Invoice_Details_Id,
        Invoice_Details_qty: Invoice_Details_qty,
        Invoice_Details_amount: Invoice_Details_amount,
        Invoice_Hed_Invoice_Hed_id: Invoice_Details_Id,
        Products_Products_id: Products_Products_id,
      })
      .then((res) => setInvoiceList(res.data));
  };

  return (
    <div className=" pagemargin page">
      <br />
      <form onSubmit={onSubmit}>
        <div className="form-group row" style={{ marginLeft: "20px" }}>
          <h6 class="col-sm-1">Date </h6>
          <h6 class="col-sm-4">
            <input
              type="text"
              value={todate}
              onChange={changeonclick}
              disabled
              name="Invoice_Hed_Date"
            />
          </h6>
          <div class="col-sm-2">
            <h4>Invoice</h4>
          </div>
        </div>
        <br />

        <div className="form-group row" style={{ marginLeft: "20px" }}>
          <h6 class="col-sm-1">Invoice_Id </h6>
          <h6 class="col-sm-6">
            <input
              type="text"
              value={Invoice_Details_Id}
              disabled
              name="Invoice_Details_Id"
            />
          </h6>

          <div class="col-sm-5">
            Customer Name{" "}
            <input
              type="text"
              name="Invoice_Hed_customer"
              value={Invoice_Hed_customer}
            />
          </div>
        </div>

        <br />
        <br />

        <div className="form-group row" style={{ marginLeft: "40px" }}>
          <h6 class="col-sm-2" style={{ textAlign: "center" }}>
            Item Id
          </h6>
          <h6 class="col-sm-5" style={{ textAlign: "center" }}>
            Description
          </h6>
          <h6 class="col-sm-2" style={{ textAlign: "center" }}>
            Qty
          </h6>
          <h6 class="col-sm-2" style={{ textAlign: "center" }}>
            Amount
          </h6>
        </div>

        <div className="form-group row" style={{ marginLeft: "40px" }}>
          <h6 class="col-sm-2">
            <input
              type="number"
              style={{ width: "110%" }}
              value={Products_Products_id}
            />
          </h6>
          <h6 class="col-sm-5">
            <input
              type="number"
              style={{ width: "103%" }}
              value={Products_Name}
              disabled
            />
          </h6>
          <h6 class="col-sm-2">
            <input
              type="number"
              style={{ width: "110%" }}
              value={Invoice_Details_qty}
            />
          </h6>
          <h6 class="col-sm-2">
            <input
              type="number"
              style={{ width: "110%" }}
              disabled
              name="Invoice_Hed_Amount"
              value={{ Invoice_Details_qty } * { Products_price }}
            />
          </h6>
        </div>

        <table
          class="table"
          style={{
            minHeight: "260px",
            marginLeft: "4%",
            width: "93%",
            background: "hsl(0,0%,0%,0.07)",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Item ID</th>
              <th scope="col">Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoiceall.map((invoice, idx) => (
              <tr>
                <td>{invoice.Invoice_Details_Id}</td>
                <td>{invoice.Products_Name}</td>
                <td>{invoice.Invoice_Details_qty}</td>
                <td>{invoice.Invoice_Hed_Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h5 style={{ float: "left", marginTop: "15px", marginLeft: "50px" }}>
          Total <input type="text" disabled value={Invoice_Details_amount} />
        </h5>

        <button
          className="btn btn-light"
          type="button"
          style={{ float: "right", marginLeft: "50px", marginRight: "70px" }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn btn-light"
          style={{ float: "right" }}
        >
          Process
        </button>
      </form>
    </div>
  );
}
