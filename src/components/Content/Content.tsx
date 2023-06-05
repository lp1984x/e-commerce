import React from "react";
import "./content.scss";
import Main from "../../pages/Main/Main";
import Bag from "../../pages/Bag/Bag";
import { Route, Routes } from "react-router-dom";

export default function Content() {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="bag" element={<Bag />}></Route>
      </Routes>
    </main>
  );
}
