import React, { FC } from "react";
import { INavItem } from "./common.types";
import { Link } from "react-router-dom";

const NavItem: FC<INavItem> = ({ navLink, navTitle }) => {
  return (
    <Link to={navLink} className="hover:text-tertiary text-primary">
      {navTitle}
    </Link>
  );
};

export default NavItem;
