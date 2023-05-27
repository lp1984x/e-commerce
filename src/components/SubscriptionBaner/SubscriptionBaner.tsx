import React from "react";
import "./subscriptionBaner.scss";

export default function SubscriptionBaner() {
  return (
    <div className="subscription-baner">
      <section className="subscription-baner__left">
        <h5>JOIN OUR</h5>
        <h1>SUBSCRIPTION CLUB</h1>
        <p>as low as $9.95/month</p>
        <button className="subscription-baner__button">LEARN MORE</button>
      </section>
      <section className="subscription-baner__right">
        <h1>WIN $250 SPOPPING SPREE</h1>
        <p>MONTHY GIVEWAY</p>
        <button className="subscription-baner__button">LEARN MORE</button>
      </section>
    </div>
  );
}
