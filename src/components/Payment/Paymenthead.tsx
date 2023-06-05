import React from "react";
import { Accordion } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./paymenthead.scss";

export default function Paymenthead() {
  return (
    <section className="payment-head">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Icon.TicketDetailed /> Heve a promocode
          </Accordion.Header>
          <Accordion.Body>
            <form>
              <input
                placeholder="Enter dicount code"
                className="payment-head__input"
              ></input>
            </form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Icon.Gift /> Apply gift certificate
          </Accordion.Header>
          <Accordion.Body>
            <form>
              <input
                placeholder="Enter certificate code"
                className="payment-head__input"
              ></input>
            </form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>ESTIMATE SHIPPING AND TAX</Accordion.Header>
          <Accordion.Body>
            <form>
              <select name="select country" className="payment-head__input">
                <option>Some Country 1</option>
                <option>Some Country 2</option>
                <option>Some Country 3</option>
              </select>
              <select name="select state" className="payment-head__input">
                <option>Some State 1</option>
                <option>Some State 2</option>
                <option>Some State 3</option>
              </select>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
