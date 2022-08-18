import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div>
        <div class="sidebar">
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="/"
          >
            <input className="btn btn-light" value="Invoice" />
          </a>
          <br />
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="/product"
          >
            <input className="btn btn-light" value="Product" />
          </a>
          <br />
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="/report"
          >
            <input className="btn btn-light" value="Report" />
          </a>
        </div>
      </div>
    </div>
  );
}
