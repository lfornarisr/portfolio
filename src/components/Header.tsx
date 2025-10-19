"use client";
import {
  Bars3Icon,
  BriefcaseIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
  { name: "Inicio", href: "#inicio", icon: HomeIcon },
  { name: "Experiencia", href: "#experiencia", icon: BriefcaseIcon },
  { name: "Sobre mí", href: "#sobremi", icon: UserIcon },
  { name: "Contacto", href: "#contacto", icon: EnvelopeIcon },
];
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed w-full max-w-2xl flex flex-col justify-center items-center p-4 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-2xl">
      {" "}
      <div className="flex justify-between md:justify-center items-center w-full">
        {" "}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {" "}
          <Bars3Icon className="size-8 text-blue-400 hover:text-blue-500" />{" "}
        </button>{" "}
        <nav className="hidden md:flex space-x-8">
          {" "}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              {" "}
              {link.name}{" "}
            </a>
          ))}{" "}
        </nav>{" "}
      </div>{" "}
      {/* Menu móvil con animación */}{" "}
      <AnimatePresence>
        {" "}
        {menuOpen && (
          <>
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 w-full h-screen"
              onClick={() => setMenuOpen(false)}
            />{" "}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-2/3 sm:w-1/3 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-2xl md:hidden z-50"
            >
              {" "}
              <div className="flex items-center p-3 shadow justify-end">
                {" "}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden text-gray-600 dark:text-gray-200 cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {" "}
                  <XMarkIcon className="size-6 text-blue-400 hover:text-blue-500" />{" "}
                </button>{" "}
              </div>{" "}
              <ul className="flex flex-col text-lg">
                {" "}
                {navLinks.map((link) => (
                  <li className="flex gap-4 p-3" key={link.name}>
                    {" "}
                    <link.icon className="size-6 mb-1 text-blue-400" />{" "}
                    <a
                      href={link.href}
                      className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                    >
                      {" "}
                      {link.name}{" "}
                    </a>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
              <hr className="mx-4 border text-gray-500" />{" "}
            </motion.nav>{" "}
          </>
        )}{" "}
      </AnimatePresence>{" "}
    </header>
  );
};
export default Header;
