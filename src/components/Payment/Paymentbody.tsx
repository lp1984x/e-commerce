import React from "react";
import { Table } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
import * as Icon from "react-bootstrap-icons";
import "./paymentbody.scss";

export default function Paymentbody() {
  const totalPrice = useAppSelector((state) => state.bag.totalPrice);
  const currency = useAppSelector((state) => state.currency.value);
  return (
    <div className="payment-body">
      <Table className="payment-body__table">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>
              {currency === "USD" && "$ " + totalPrice}
              {currency === "RUB" && `\u20bd ` + totalPrice * 80}
              {currency === "CHN" && `\u5143 ` + totalPrice * 7}
            </td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>0</td>
          </tr>
          <tr>
            <td>ORDER TOTAL</td>
            <td>
              {currency === "USD" && "$ " + totalPrice}
              {currency === "RUB" && `\u20bd ` + totalPrice * 80}
              {currency === "CHN" && `\u5143 ` + totalPrice * 7}
            </td>
          </tr>
        </tbody>
      </Table>
      <section className="payment-body__cards">
        <div className="payment-body__addresses">
          <a href="#none">Check out with multiple addresses</a>
        </div>
        <div className="payment-body__checkout">
          <Icon.LockFill className="payment-body__icons" />
          PROCEED TO SECURE CHECKOUT
        </div>
        <div className="payment-body__or">or 4 payments of $25.37</div>
        <div className="payment-body__paypal">
          <Icon.Paypal className="payment-body__icons" />
          Pay<span>Pal</span>
        </div>
        <div className="payment-body__credit">
          {" "}
          <Icon.Paypal className="payment-body__icons" />
          CREDIT
        </div>
        <div className="payment-body__amazon">amazon pay</div>
      </section>
    </div>
  );
}
