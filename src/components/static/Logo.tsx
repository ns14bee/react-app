import React from "react";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-2 items-start align-middle">
      <LogoSvg className="size-6 text-primary self-center" />
      <div className="text-white text-2xl font-semibold">Askitect</div>
    </div>
  );
};

export default Logo;
