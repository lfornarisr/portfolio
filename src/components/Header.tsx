import React from "react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];

const Header: React.FC = () => (
  <header className="fixed top-4 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-200">
    <nav className="flex justify-center w-full">
      <ul className="flex space-x-4 rounded-4xl px-6 py-2 bg-blue-200/20 backdrop-blur-lg dark:bg-black/10">
        {navLinks.map((link) => (
          <li key={link.name} className=" font-medium min-w-max">
            <a
              href={link.href}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
