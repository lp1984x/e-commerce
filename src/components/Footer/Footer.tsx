import React from "react";
import "./footer.scss";
import Footbar from "./Footbar/Footbar";
import SignSection from "./SignSection/SignSection";
import BottomSection from "./BottomSection/BottomSection";

export default function Footer() {
  return (
    <footer className="footer">
      <Footbar />
      <SignSection />
      <BottomSection />
    </footer>
  );
}
