import React, { useRef, useEffect } from "react";

import "./Mouse.css";

export const Mouse = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.top = mouseY + "px";
      cursorRef.current.style.left = mouseX + "px";
      cursorRef.current.style.display = "block";
    });

    document.addEventListener("mousedown", () => {
      cursorRef.current.style.transform = "scale(1.5)";
    });
    document.addEventListener("mouseup", () => {
      cursorRef.current.style.transform = "scale(1)";
    });
    document.addEventListener("mouseleave", () => {
      cursorRef.current.style.display = "none";
    });
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};
