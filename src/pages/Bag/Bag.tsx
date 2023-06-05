import React from "react";
import { Container, Table } from "react-bootstrap";
import Bagitem from "../../components/BagItem/Bagitem";
import { useAppSelector } from "../../store/store";
import { IProd } from "../../models";
import * as Icon from "react-bootstrap-icons";
import "./bag.scss";
import { Link } from "react-router-dom";
import Paymentbody from "../../components/Payment/Paymentbody";
import Paymenthead from "../../components/Payment/Paymenthead";

export default function Bag() {
  const filling = useAppSelector((state) => state.bag.bagFilling);

  return (
    <Container>
      <h1 className="bag__header">SHOPPING CART</h1>
      <Container className="bag">
        <section className="bag__cart-section">
          <article className="bag__return">
            <Icon.ExclamationCircle className="bag__circle" />
            Return items to us by post within 14 days of receipt. Items shold be
            unused, unopened and have original seals intact. Please read our
            returns help section for more information.
          </article>
          <Table className="bag__cart-section-table">
            <thead className="bag__table-head">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {filling.map((item: IProd) => (
                <Bagitem key={item.id} prd={item} />
              ))}
            </tbody>
          </Table>
          <Link to="/">
            <button className="bag__continue-button">CONTINUE SHOPPING</button>
          </Link>
        </section>
        <section className="bag__payment-section">
          <Paymenthead />
          <Paymentbody />
        </section>
      </Container>
    </Container>
  );
}
