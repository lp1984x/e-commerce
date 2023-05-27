import React from "react";
import Topbar from "./Topbar/Topbar";
import "./header.scss";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <header className="header sticky-top">
      <Topbar />
      <NavBar />
    </header>
  );
}
