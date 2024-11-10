import React, { FC } from "react";
import { IButton } from "./common.types";
import { ButtonVariants } from "../../utils/constants";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export const Button: FC<IButton> = ({
  children,
  variant,
  isDisabled = false,
  isLoading = false,
  showIcon = false,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 py-2 px-6 text-primary ${ButtonVariants[variant]} rounded-full  transition w-auto`}
        disabled={isDisabled && isLoading}
      >
        <div>{children}</div>
        {/* can make it more dynamic if needed */}
        {showIcon && <ArrowUpRightIcon className="size-6  text-primary" />}
      </button>
    </div>
  );
};
