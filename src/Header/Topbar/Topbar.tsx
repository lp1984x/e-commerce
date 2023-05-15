import React, { useState } from "react";
import "./topbar.scss";
import * as Icon from "react-bootstrap-icons";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCurrency } from "../../store/features/currencySlice";
import { NavDropdown } from "react-bootstrap";

export default function Topbar() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.currency.value);
  const currency = ["USD", "RUB", "CHN"];
  return (
    <div className="topbar">
      <div className="topbar__left-bar">
        <NavDropdown
          title={current}
          id="collasible-nav-dropdown"
          className="topbar__buttons"
        >
          {currency.map((item, index) => (
            <NavDropdown.Item
              key={index}
              onClick={() => dispatch(setCurrency(item))}
            >
              {item}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </div>
      <div className="topbar__right-bar">
        <a className="topbar__buttons" href="#none">
          Help & Information
        </a>
        <a className="topbar__buttons" href="#none">
          Connect with us
        </a>
      </div>
    </div>
  );
}
