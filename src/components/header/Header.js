import React from "react";
import IconMoon from "./MiddleIcon";
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="Header">
        <div className="HLeft">
          <div className="Icon">
            <IconMoon />
          </div>
          <div className="HText">
            <p className="text1">See</p>
            <p className="text2">u</p>
            <p className="text3">Live</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
