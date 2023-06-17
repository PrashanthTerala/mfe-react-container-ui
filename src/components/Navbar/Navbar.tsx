import React, { useEffect, useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  let prevScrollPos = 0;
  let currentScrollPos = 0;
  const windowScroll = () => {
    const header = document.querySelector("header");
    currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      header?.classList.remove("scroll");
    } else {
      header?.classList.add("scroll");
    }
    prevScrollPos = currentScrollPos;
  };
  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);
  return (
    <header
      className={`header`}
      // style={{ display: `${navShow}` }}
    >
      <div className="logo">LOGO HERE</div>
      <nav>
        <ul>
          <li>
            <a href="/#/">Home</a>
          </li>
          <li>
            <a href="/#/remote01/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/#/remote01/about">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
