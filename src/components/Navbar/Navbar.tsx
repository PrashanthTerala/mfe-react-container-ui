import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  //   const header = document.querySelector("header");
  //   let prevScrollPos = window.pageYOffset;
  //   console.log("prevScrollPos: " + prevScrollPos);
  //   window.onscroll = function () {
  //     let currentScrollPos = window.pageYOffset;
  //     if (prevScrollPos > currentScrollPos) {
  //       header?.classList.remove("scroll");
  //     } else {
  //       header?.classList.add("scroll");
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };
  return (
    <header className="header">
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
