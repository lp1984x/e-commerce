import React from "react";
import "./signSection.scss";

export default function SignSection() {
  const email = "info@someshop.com";
  const adress = ["SOMESHOP, Inc.", "789 SOME AVE.", "SOME CITY, CA 90210"];
  return (
    <section className="sign-section">
      <div className="container-fluid container-lg d-flex flex-wrap">
        <div className="col-12 col-md-6 sign-section-left">
          <h3 className="fw-bold">SIGN UP FOR SPECIAL OFFERS AND PROMOTIONS</h3>
          <form className="sign-section__form">
            <input placeholder="Your Email" className="sign-section__email" />
            <input placeholder="Your Mobile" className="sign-section__tel" />
            <button className="sign-section__button">SIGN UP</button>
          </form>
          <p>
            By entering your email and clicking “subscribe”, you consent to
            receive marketing emails from e.l.f. You can unsubscribe at any time
            through the unsubscribe link in each email. See our Privacy Notice
            for more details, including how your personal information is used
            and shared.
          </p>
        </div>
        <div className="col-12 col-md-6 sign-section-right">
          <h3 className="fw-bold">NEED HELP?</h3>
          <p>{email}</p>
          <h3 className="fw-bold">VISIT US</h3>
          {adress.map((item, index) => (
            <p key={index} className="m-0">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
