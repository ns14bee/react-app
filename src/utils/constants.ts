import { TButtonVairant } from "../components/common/common.types";

export const NavItems = [
  { name: "Askitect AI", url: "#" },
  { name: "Solutions", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "About Us", url: "#" },
  { name: "Contact Us", url: "#" },
];

export const FooterItems = [
  { name: "About Us", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Terms & Conditions", url: "#" },
  { name: "Privacy Policy", url: "#" },
];

export const ButtonVariants: Record<TButtonVairant, string> = {
  primary: " bg-button-primary hover:bg-purple-700 text-primary",
  transparnat:
    "bg-none hover:bg-button-primary text-secondary hover:text-primary hover:border-primary border border-secondary",
};
