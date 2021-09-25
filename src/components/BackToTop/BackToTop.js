import React, { useState } from "react";
import MyIcons from "../Icons/Icons";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={visible ? "backtotop show" : "backtotop"}
      onClick={scrollToTop}
    >
      <MyIcons.ArrowUp></MyIcons.ArrowUp>
    </button>
  );
}

export default BackToTop;
