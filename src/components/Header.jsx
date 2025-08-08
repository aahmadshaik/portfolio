import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ring-1 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#0b2540] to-[#071229] ring-white/10"
              : "bg-slate-50 ring-slate-200"
          }`}
        >
          <span className="font-semibold">AS</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Aslam Shaik</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            Front-End Developer — React & Web Development
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`p-2 rounded-md ${
            theme === "dark"
              ? "bg-white/5 hover:bg-white/10"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <a
          href="#contact"
          className={`hidden md:inline-block px-4 py-2 rounded-md text-sm border ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#102a4b] to-[#071229] border-white/5"
              : "bg-white border-slate-200"
          }`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
