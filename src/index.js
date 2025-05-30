import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (burger && navMenu) {
    burger.addEventListener("click", (e) => {
      navMenu.classList.toggle("open");
      e.stopPropagation();
    });

    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
    });

    navMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    const links = navMenu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });

    let lastScroll = 0;
    const menubar = document.querySelector(".menubar");
    const logoMenu = document.querySelector(".logoMenu");

    window.addEventListener("scroll", () => {
      let current = window.scrollY;
      menubar.style.transition = "top 0.3s, background-color 0.3s";
      if (current === 0) {
        menubar.style.top = "0";
        menubar.style.backgroundColor = "transparent";
        logoMenu.style.display = "none";
      } else if (current > lastScroll) {
        menubar.style.top = "-100px";
      } else {
        menubar.style.top = "0";
        menubar.style.backgroundColor = "#fdecdd";
        logoMenu.style.display = "block";
      }
      lastScroll = current;
    });
  }
});
