import React from "react";
import TopBar from "./top-bar";

const Navbar = () => {
  return (
    <div className="h-20 lg:h-64 border">
      <TopBar />
      <div className="hidden lg:flex h-32 border">Navbar</div>
    </div>
  );
};

export default Navbar;
