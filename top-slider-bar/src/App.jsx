import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { text } from "../../data";

const App = () => {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const element = textRef.current;
    const scrollTop = element.scrollTop;
    const totalHeight = element.scrollHeight - element.clientHeight;
    const scrollPercentage = (scrollTop / totalHeight) *100
    setScrollProgress(scrollPercentage)
  };

  useEffect(() => {
    const scrollElement = textRef.current;

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Horizontal bar showing scroll progress */}
      <div
        className="bar"
        style={{
          width: `${scrollProgress}%`,
          height: "5px",
          backgroundColor: "blue",
        }}
      ></div>

      {/* Scrollable content */}
      <div
        ref={textRef}
        style={{
          height: "90vh", 
          overflowY: "scroll", 
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
