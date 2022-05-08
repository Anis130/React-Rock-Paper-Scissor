import React from "react";
import { Modal, History } from "./";

function Footer() {
  return (
    <div className="footer">
      <History className="footer-item" />
      <Modal className="footer-item" />
    </div>
  );
}

export default Footer;
