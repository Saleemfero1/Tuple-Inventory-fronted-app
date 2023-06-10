import React from "react";
import "./Footer.css";

export default function Footer() {
    var year = new Date().getFullYear();
  return (
    <div className="bg-dark mt-3">
      <div className="row">
       <span className=" copy-info">© {year} Tuple Inventory Management. All rights reserved.</span>
      </div>
    </div>
  );
}
