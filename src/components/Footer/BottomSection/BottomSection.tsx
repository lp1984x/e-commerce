import React from "react";
import "./bottonSection.scss";

export default function BottomSection() {
  return (
    <section className="bottom-section">
      <div className="container-fluid container-lg d-flex flex-column align-items-center justify-content-center py-4">
        <div className="d-flex flex-wrap justify-content-center">
          <p className="px-5 text-center mb-3">Customer Service Code: 0A</p>
          <div className="mb-3">
            <a href="#none">Privacy Policy</a>
            <span className="px-2">|</span>
            <a href="#none">CA Privacy Notice</a>
          </div>
          <p className="px-5 text-center mb-3">
            Entire contents Copyright © 1997-2023. PerfumeShop.com, Inc.
          </p>
        </div>
        <p className="bottom-section__patent">
          SomeShop.com is an independent retailer. SomeShop and SomeShop.com are
          trademarks of SomeShop, Inc. and are Registered in the US Patent &
          Trademark Office.
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </section>
  );
}
