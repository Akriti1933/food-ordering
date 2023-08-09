import "./Layout.css";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <div id="layout-wrapper">
      <button id="scrollToTopBtn" onClick={scrollToTop} title="Go to top">
        <i className="arrow-up">&uarr;</i>
      </button>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
