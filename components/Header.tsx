"use client";
import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "@/app/Nav";
import MobileNav from "./../app/MobileNav";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setHeader(currentPosition > 50);
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* <Logo /> */}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <div className="flex items-center gap-x-6 ">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* Mobile nav */}
            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
