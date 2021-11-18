import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => (
  <nav className="">
    <div>
      <NavLink className="" to="/">
        Home
      </NavLink>
    </div>
    <div>
    <NavLink className="" to="/users">
        Users
      </NavLink>
    </div>
  </nav>
);

export default NavMenu;
