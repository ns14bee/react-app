import React from "react";
import { TReviewData } from "../home/home.types";

export type TButtonVairant = "primary" | "transparnat";

export interface INavItem {
  navTitle: React.ReactNode;
  navLink: string;
}

export interface IButton {
  children: React.ReactNode;
  variant: TButtonVairant;
  showIcon?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

export interface ILinkSection {
  to: string;
  children: React.ReactNode;
}

export interface IProfile {
  data: TReviewData;
  isActive: boolean;
  handleSetProfile: (id: TReviewData) => void;
}
