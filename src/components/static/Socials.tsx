import React from "react";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Linkdin } from "../../assets/linkedin.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <nav className="flex gap-[16px]">
      <Link to="/" target="_blank">
        <Facebook className="size-4 self-center fill-tertiary" />
      </Link>
      <Link to="/" target="_blank">
        <Instagram className="size-4 fill-tertiary self-center" />
      </Link>
      <Link to="/" target="_blank">
        <Linkdin className="size-4 fill-tertiary self-center" />
      </Link>
      <Link to="/" target="_blank">
        <Youtube className="size-4 fill-tertiary self-center" />
      </Link>
    </nav>
  );
};

export default Socials;
