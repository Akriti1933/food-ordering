import "./Footer.css";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="title">Food Ordering System</h1>
      <p className="quotation">
        "Indulge in culinary delights with our seamless food ordering system.
        Enjoy a hassle-free experience from menu exploration to doorstep
        delivery."
      </p>
      <div className="social-media d-flex align-items-center justify-content-center gap-4">
        <i>
          <BsFacebook style={{ color: "#1877F2" }} />
        </i>
        <i>
          <BsInstagram style={{ color: " #C13584" }} />
        </i>
        <i>
          <BsTwitter style={{ color: "#1DA1F2" }} />
        </i>
      </div>
      <div className="copyright">
      &copy; Food Ordering System ({new Date().getFullYear()}). All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
