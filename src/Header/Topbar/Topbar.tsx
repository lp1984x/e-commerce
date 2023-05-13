import React, { useState } from "react";
import "./topbar.scss";
import * as Icon from "react-bootstrap-icons";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCurrency } from "../../store/features/currencySlice";

export default function Topbar() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.currency.value);

  const currency = ["USD", "RUB", "CHN"];
  const [open, setopen] = useState(false);
  return (
    <div className="topbar">
      <div className="topbar__left-bar">
        <a
          className="topbar__buttons"
          href="#none"
          onClick={() => setopen((prev) => !prev)}
        >
          {current}
          <Icon.ChevronCompactDown className="topbar__button-icon" />
        </a>
        <ul className={open ? "topbar__submenu-open" : "topbar__submenu"}>
          {currency.map((item, index) => (
            <li
              key={index}
              className="topbar__submenu-buttons"
              onClick={() => {
                dispatch(setCurrency(item));
                setopen((prev) => !prev);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
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
