import React from "react";
import Topbar from "./Topbar/Topbar";

import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <Topbar />
      <NavBar />
    </header>
  );
}
