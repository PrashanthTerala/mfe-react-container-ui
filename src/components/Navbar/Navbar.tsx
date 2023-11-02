import React, { useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const baseURL = window.location.origin + window.location.pathname + "#";
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

  // const li = () => {
  //   return (
  //     <>
  //       <li>
  //         <a href={`${baseURL}/kkkkkk`}>Dashboard</a>
  //       </li>
  //     </>
  //   );
  // };

  return (
    <>
      <header
        className={`header`}
        // style={{ display: `${navShow}` }}
      >
        <div className="logo">LOGO HERE</div>
        <nav>
          <ul>
            <li>
              <a href={baseURL}>Home</a>
            </li>
            <li>
              <a href={`${baseURL}/remote01/dashboard`}>Dashboard</a>
            </li>
            <li>
              <a href={`${baseURL}/remote01/about`}>About</a>
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
    </>
  );
};
