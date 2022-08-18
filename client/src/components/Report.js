import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";

export default function Report() {
  const [invoice, setInvoiceList] = useState([]);

  const ref = useRef();

  const [dateFrom, setDatefrom] = useState("");
  const [dateTo, setDateto] = useState("");


  const filterData = (invoice, searchkey) => {
    const result = invoice.filter(
      (invoice) =>
        invoice.dateFrom.includes(searchkey) ||
        invoice.dateTo.includes(searchkey)
    );
    setInvoiceList({ invoice: result });
  };

  const handelSearch = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:3001/invoice").then((res) => {
      filterData(res.data, searchkey);
    });
  };

  const Onclear = () => {
    setDatefrom("");
    setDateto("");
  };

  return (
    <div className="pagemargin page">
      <form onSubmit={handelSearch}>
        <div className="form-group row">
          <h5 class="col-sm-2 col-form-label"></h5>
          <h5 class="col-sm-6 col-form-label">Date From</h5>
          <h5 class="col-sm-1 col-form-label">Date To</h5>
        </div>

        <div className="form-group row">
          <label for="inputEmail3" class="col-sm-1 col-form-label"></label>
          <div class="col-sm-6">
            <input
              type="date"
              style={{ width: "300px" }}
              className="form-control"
              name="dateFrom"
              onChange={(e) => setDatefrom(e.target.value)}
              value={dateFrom}
              required
            />
          </div>
          <div class="col-sm-5">
            <input
              type="date"
              style={{ width: "300px" }}
              className="form-control"
              name="dateTo"
              value={dateTo}
              onChange={(e) => setDateto(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label for="inputEmail3" class="col-sm-5 col-form-label"></label>

          <div class="col-sm-5">
            <input
              type="submit"
              style={{ width: "130px" }}
              className=" btn btn-light"
              value="Search"
            />
          </div>
        </div>
      </form>

      <br />
      <br />

      <table
        className="table"
        style={{
          minHeight: "260px",
          marginLeft: "4%",
          width: "93%",
          background: "hsl(0,0%,0%,0.07)",
        }}
      >
        <thead>
          <tr style={{ background: "hsl(0,0%,0%,0.2)" }}>
            <th scope="col">Invoice No</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Customer</th>
          </tr>
        </thead>
        <tbody>
          {invoice.map((invoice, idx) => (
            <tr>
              <td>{invoice.id}</td>
              <td>{invoice.description}</td>
              <td>{invoice.qty}</td>
              <td>{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <center>
        <ReactToPrint
          trigger={() => (
            <button style={{ marginRight: "70px" }} className="btn btn-light">
              Print
            </button>
          )}
          content={() => ref.current}
        />

        <button className="btn btn-light" type="button" onClick={Onclear}>
          Clear
        </button>
      </center>

      <div hidden>
        <div ref={ref}>
          <h3 style={{ textAlign: "center" }}>Total Sale</h3>

          <br />

          <h6 style={{ float: "left", marginLeft: "70px", marginTop: "20px" }}>
            Genarated Date :- {new Date().getFullYear()}-
            {new Date().getMonth() + 1}-{new Date().getDate()}
          </h6>

          <h6 style={{ textAlign: "right", marginRight: "100px" }}>
            Date From :- {dateFrom}
          </h6>
          <br />
          <h6 style={{ textAlign: "right", marginRight: "100px" }}>
            Date To :- {dateTo}
          </h6>

          <div className="form-group row">
            <h5 class="col-sm-2 col-form-label"></h5>
          </div>
          <br />

          <table
            className="table"
            style={{ minHeight: "260px", marginLeft: "40px" }}
          >
            <thead>
              <tr>
                <th scope="col">Invoice No</th>
                <th scope="col">Date</th>
                <th scope="col">Customer</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.map((invoice, idx) => (
                <tr>
                  <td>{invoice.id}</td>
                  <td>{invoice.description}</td>
                  <td>{invoice.qty}</td>
                  <td>{invoice.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr style={{ float: "right", width: "200px", marginRight: "50px" }} />
          <br />
          <h3 style={{ textAlign: "right", marginRight: "270px" }}>Total</h3>
          <hr style={{ float: "right", width: "200px", marginRight: "50px" }} />
        </div>
      </div>
    </div>
  );
}
