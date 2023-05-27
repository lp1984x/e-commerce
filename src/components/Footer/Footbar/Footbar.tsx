import React from "react";
import * as Icon from "react-bootstrap-icons";
import "./footbar.scss";
import { Container } from "react-bootstrap";

export default function Footbar() {
  return (
    <ul className="footbar">
      <Container className="footbar__container m-0">
        <li className="footbar__items">
          <Icon.Truck className="footbar__icons" /> Free Delivery & Returns*
        </li>
        <li className="footbar__items">
          <Icon.PencilSquare className="footbar__icons" /> Online Self-Service
        </li>
        <li className="footbar__items">
          <Icon.Check2Square className="footbar__icons" /> 100% Genuine
          Guaranteed
        </li>
        <li className="footbar__items">
          <Icon.ShieldLock className="footbar__icons" />
          Secure Payment
        </li>
        <li className="footbar__items">
          <Icon.ExclamationOctagon className="footbar__icons" /> 100% authentic
          products
        </li>
      </Container>
    </ul>
  );
}
