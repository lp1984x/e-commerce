import React from "react";
import Topbar from "./Topbar/Topbar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="header">
      <Topbar />
      <SearchBar />
    </header>
  );
}
