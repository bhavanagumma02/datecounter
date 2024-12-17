import React from "react";

const Header = () => {
  return (
    //HEADER SECTION --LEFT
    <div className="headerSection">
      <div className="left">
        <div className="tite">
          <h2>Shopping </h2>
        </div>
      </div>

      {/* HEADER SECTION--Left */}
      <div className="centre">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="search" placeholder="search.." />
      </div>
      {/* HEADER SECTION--RIGHT */}
      <div className="right">
        <div className="signin">Signin/ signup</div>
        <div className="cart">cart</div>
      </div>
    </div>
  );
};
export default Header;
