import React, { useState } from "react";
import Logo from "../static/Logo";
import { FooterItems } from "../../utils/constants";
import NavItem from "../common/NavItem";
import { Button } from "../common/Button";
import {} from "@heroicons/react/20/solid";
import Socials from "../static/Socials";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-gradient-to-t from-g-secondary to-g-primary flex flex-col text-primary px-[10%] pt-[48px] pb-[16px] w-full gap-[48px]">
      <div className="flex w-full justify-between gap-8">
        <div className="flex flex-col justify-between gap-[104px]">
          <Logo />
          <nav className="hidden md:flex space-x-6 text-tertiary">
            {FooterItems.map((item, index) => (
              <NavItem key={index} navLink={item.url} navTitle={item.name} />
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-[32px]">
          <div className="flex flex-col gap-[6px]">
            <div className="text-lg font-semibold">Join our mailing list</div>
            <div className="text-sm">
              Subscribe to get the latest news and updates right to your inbox.
            </div>
          </div>
          <div className="flex gap-[16px] w-full self-stretch">
            <input
              value={email}
              type="email"
              className="px-4 py-2 rounded-md bg-transparent focus:outline-none w-full border-secondary border"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <Button variant="primary" onClick={() => {}}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch  gap-[16px] ">
        <div className="bg-secondary w-full h-[1px]" />
        <div className="flex justify-between self-stretch text-tertiary">
          <div className="text-sm">
            © {new Date().getFullYear()} Askitect. All rights reserved.
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
