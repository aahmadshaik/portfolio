import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = ({ theme }) => {
  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div
        className={`rounded-xl p-6 ring-1 ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#071229] to-[#000000] ring-white/5"
            : "bg-white ring-slate-200 shadow-sm"
        }`}
      >
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <div className="flex gap-3 text-lg flex-wrap items-center">
          <a
            href="mailto:shaikahmadaslam@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100 dark:bg-white/5"
            title="Email"
          >
            <FaEnvelope /> <span>shaikahmadaslam@gmail.com</span>
          </a>
          <a
            href="https://wa.me/916361618047"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100 dark:bg-white/5"
            title="WhatsApp"
          >
            <FaWhatsapp /> <span>+91 9701924456</span>
          </a>
          <a
            href="https://github.com/aahmadshaik"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-md bg-slate-100 dark:bg-white/5"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-shaik-web-developer/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-md bg-slate-100 dark:bg-white/5"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://aslam-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-md bg-slate-100 dark:bg-white/5"
            title="Website"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        Designed & built by Aslam Shaik
      </p>
    </footer>
  );
};

export default Footer;
