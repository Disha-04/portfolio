import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { href: "#home", text: "Home" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#experience", text: "Experience" },
    { href: "#contact", text: "Contact" }, // remove if you deleted contact section
  ];

  return (
    <>
      <motion.nav
        className="sticky top-0 z-50 flex h-18 w-full items-center justify-between px-6 backdrop-blur md:px-16 lg:px-24 xl:px-32"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <a href="#home" className="text-xl font-semibold text-indigo-300">
          DM
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navlinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 transition hover:text-white"
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="hidden space-x-3 lg:block">
          <a
            href="/resume.pdf"
            className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700 active:scale-95 inline-flex"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="rounded-md border border-white/20 px-6 py-2 text-white/85 transition hover:bg-white/10 active:scale-95 inline-flex"
          >
            View Projects
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="transition active:scale-90 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6.5" />
        </button>
      </motion.nav>

      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-black/60 text-lg backdrop-blur lg:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navlinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-white/90 hover:text-white"
          >
            {link.text}
          </a>
        ))}

        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex size-10 items-center justify-center rounded-md bg-slate-100 p-1 text-black transition hover:bg-slate-200"
          aria-label="Close menu"
        >
          <X />
        </button>
      </div>
    </>
  );
}
