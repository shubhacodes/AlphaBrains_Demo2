"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const menuItems = ["About", "Services", "Blog", "Join Us", "Contact Us"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Base colors matching the testimonials component
  const colors = {
    red: "#c72229",
    purple: "#775090",
    blue: "#45487a",
    green: "#169e44",
    white: "#f8f8f8",
  };

  // Gradient style matching testimonials but with adjusted opacity for header
  const gradientStyle = {
    background: `
      radial-gradient(circle at 30% 20%, ${colors.red}50 0%, transparent 40%),
      radial-gradient(circle at 70% 60%, ${colors.purple}50 0%, transparent 45%),
      radial-gradient(circle at 40% 80%, ${colors.blue}50 0%, transparent 40%),
      radial-gradient(circle at 80% 30%, ${colors.green}50 0%, transparent 20%),
      radial-gradient(circle at 20% 50%, ${colors.white}50 0%, transparent 35%),
      radial-gradient(circle at 90% 80%, ${colors.red}50 0%, transparent 40%),
      radial-gradient(circle at 10% 90%, ${colors.purple}50 0%, transparent 45%),
      linear-gradient(135deg, ${colors.red}30 0%, ${colors.purple}30 30%, ${colors.blue}30 60%, ${colors.green}30 85%, ${colors.white}30 100%)
    `,
    backgroundColor: "white",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={gradientStyle}
      />
      <header className="w-full relative">
        <div className="container flex h-16 md:h-24 items-center justify-between px-4">
          {/* Logo on the left */}
          <div className="flex items-center relative z-10">
            <Link
              href="/"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <div className="relative">
                <Image
                  src="/logo_footer.png"
                  alt="Alpha Brains"
                  width={150}
                  height={36}
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 180px"
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={toggleMenu}
              className="p-2 text-black hover:bg-black/5 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative z-10">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="relative text-xl px-3 py-2 text-black hover:no-underline after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden relative">
            <nav className="flex flex-col items-center py-4 bg-white/80 backdrop-blur-md">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="w-full text-center py-2 text-black font-semibold hover:bg-black/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
