import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed:  150,
      strings: ["new graduate!", "new graduate!"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="asset/watyu3.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm  </h2>
          <h1>Wathunyu Lipikornthanangkul</h1>
          <h3>Interested in the Frontend, UX/UI Design</h3>
          <h3>learning about ReactJS</h3>
          <h4><span ref={textRef} className="att"></span>|</h4>
        </div>
        <a href="#portfolio">
          <img src="asset/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
