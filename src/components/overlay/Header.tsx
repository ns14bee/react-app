import React from "react";
import { NavItems } from "../../utils/constants";
import NavItem from "../common/NavItem";
import { Button } from "../common/Button";
import Logo from "../static/Logo";

const Header = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url(/banner.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {/* Header */}
      <header className="sticky p-6 flex items-center justify-between z-10">
        <Logo />

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-tertiary">
          {NavItems.map((item, index) => (
            <NavItem key={index} navLink={item.url} navTitle={item.name} />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <select className="bg-transparent text-white border-none outline-none">
            <option value="en">🇺🇸 English</option>
            <option value="fr">🇫🇷 French</option>
          </select>
          <Button onClick={() => {}} variant="primary">
            Log in
          </Button>
          <Button onClick={() => {}} variant="transparnat">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center z-10  px-6 self-center align-middle">
        <div className="text-4xl md:text-6xl font-bold mb-4">
          Vivamus pretium elit, venenatis quam scelerisque non.
        </div>
        <p className="text-lg md:text-xl mb-8">
          Fusce egestas fermentum erat ac sollicitudin. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <Button onClick={() => {}} variant="primary" showIcon={true}>
          Let's start
        </Button>
      </div>
    </div>
  );
};

export default Header;
