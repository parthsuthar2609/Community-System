"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<any | null>(null);

  // Prevent hover flicker with small delay
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    {
      name: "Home",
      href: "/",
      subItems: [
        { name: "Overview", href: "/overview" },
        { name: "Updates", href: "/updates" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      name: "About",
      href: "/about",
      subItems: [
        { name: "Company", href: "/about/company" },
        { name: "Mission", href: "/about/mission" },
        { name: "Careers", href: "/about/careers" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Web Development", href: "/services/web" },
        { name: "App Development", href: "/services/app" },
        { name: "Cloud Services", href: "/services/cloud" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      subItems: [
        { name: "Support", href: "/contact/support" },
        { name: "Sales", href: "/contact/sales" },
        { name: "Locations", href: "/contact/locations" },
      ],
    },
  ];

  const hoveredItem = hoverIndex !== null ? navItems[hoverIndex] : null;

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
    }, 80); // Tiny delay = no flicker, perfect UX
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveMobileMenu(null);
    setHoverIndex(null);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-900 border-b-2 border-purple-600 shadow-xl h-18 fixed top-0 w-full z-50">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full" onClick={handleLinkClick}>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Comm<span className="text-purple-400">munity</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex flex-1 justify-center relative"
            onMouseLeave={handleMouseLeave}
          >
            <ul className="flex gap-16 text-white text-lg font-medium">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-1 py-6 px-2 border-b-4 border-transparent hover:border-purple-400 transition-all duration-200"
                  >
                    {item.name}
                    {item.subItems.length > 0 && (
                      <span className="text-xs">▼</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mega Menu Dropdown */}
            {hoveredItem && (
              <div
                className="fixed inset-x-0 top-18 bg-gray-900 border-t border-gray-700 shadow-2xl z-40"
                style={{ height: "calc(100dvh - 72px)" }}
                onMouseEnter={() => hoverTimeoutRef.current && clearTimeout(hoverTimeoutRef.current)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-10 flex gap-12">
                  {/* Left: Dynamic Submenu */}
                  <div className="w-80">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 border-b-2 border-purple-600 pb-3 inline-block">
                      {hoveredItem.name}
                    </h3>
                    <ul className="space-y-2">
                      {hoveredItem.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block px-5 py-3 text-lg text-gray-200 hover:bg-purple-800 hover:text-white rounded-lg transition-all duration-200 group"
                          >
                            <span className="group-hover:translate-x-2 transition-transform inline-block">
                              {sub.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Static Featured Section */}
                  <div className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Welcome to the Future
                    </h3>
                    <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl">
                      Discover powerful tools, innovative solutions, and a passionate community 
                      dedicated to building the next generation of digital experiences.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="contained"
                        size="large"
                        className="!bg-indigo-600 hover:!bg-indigo-700 !px-8 !py-4 !text-lg !font-semibold"
                      >
                        Explore Features
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        className="!border-purple-600 !text-purple-700 hover:!bg-purple-50 !px-8 !py-4 !text-lg"
                      >
                        Read Blog
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Sign In */}
          <div className="hidden lg:block">
            <Button
              variant="contained"
              size="large"
              className="!bg-gradient-to-r !from-purple-600 !to-indigo-600 hover:!from-purple-700 hover:!to-indigo-700 !px-8 !py-3 !text-lg !font-semibold !rounded-full shadow-lg"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setActiveMobileMenu(null);
            }}
          >
            {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </nav>

        {/* Mobile Menu - Main Level */}
        <div
          className={`fixed top-18 left-0 w-full h-screen bg-gray-900 z-40 transition-transform duration-500 lg:hidden ${
            isMenuOpen && !activeMobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="pt-6 px-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() =>
                      item.subItems.length > 0
                        ? setActiveMobileMenu(item)
                        : handleLinkClick()
                    }
                    className="w-full flex justify-between items-center py-5 px-6 text-xl font-medium text-white hover:bg-purple-800 rounded-xl transition-all"
                  >
                    <Link href={item.href} onClick={handleLinkClick} className="flex-1 text-left">
                      {item.name}
                    </Link>
                    {item.subItems.length > 0 && <ChevronRightIcon className="text-purple-300" />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10 px-6">
              <Button
                fullWidth
                variant="contained"
                size="large"
                className="!bg-gradient-to-r !from-purple-600 !to-indigo-600 hover:!from-purple-700 hover:!to-indigo-700 !py-5 !text-xl !font-bold !rounded-2xl"
                onClick={handleLinkClick}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Submenu */}
        <div
          className={`fixed top-18 left-0 w-full h-screen bg-gray-900 z-50 transition-transform duration-500 lg:hidden ${
            activeMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {activeMobileMenu && (
            <div className="px-6 py-6">
              <button
                onClick={() => setActiveMobileMenu(null)}
                className="flex items-center gap-3 text-purple-300 mb-8 text-lg font-semibold hover:text-white"
              >
                <ArrowBackIosNewIcon />
                <span>Back</span>
              </button>

              <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-purple-600 pb-4 inline-block">
                {activeMobileMenu.name}
              </h2>

              <ul className="space-y-3">
                {activeMobileMenu.subItems.map((sub: any) => (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      onClick={handleLinkClick}
                      className="block py-5 px-6 text-xl text-gray-200 hover:bg-purple-800 hover:text-white rounded-xl transition-all"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-18" />
    </>
  );
};

export default Header;