import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import React, { FC } from "react";
import { ILinkSection } from "./common.types";
import { Link } from "react-router-dom";

const LinkSection: FC<ILinkSection> = ({ children, to }) => {
  return (
    <div className="flex flex-col p-8 gap-2 h-32 bg-quaternary min-w-[400px] self-stretch flex-1 rounded-xl">
      <div className="font-semibold">{children}</div>
      <div className="flex gap-2 font-normal items-center">
        <Link className="text-quaternary hover:text-tertiary" to={to}>
          Learn More
        </Link>
        <ArrowUpRightIcon className="size-4  text-primary" />
      </div>
    </div>
  );
};

export default LinkSection;
