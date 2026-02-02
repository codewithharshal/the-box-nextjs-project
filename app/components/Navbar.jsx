"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact", highlight: true },
  ];

  return (
    <nav className="bg-white py-5 relative z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <img src="/logo.svg" className="w-8 h-8" />
          TheBox
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <FaTimes />
          : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔥 MOBILE MENU */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          {navLinks.map((link) => (
            <li key={link.name} className="text-center py-4 border-b">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
