"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const links = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Solutions", "#solutions"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"]
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nova-theme");
    const nextDark = savedTheme ? savedTheme === "dark" : true;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const nextDark = !current;
      document.documentElement.dataset.theme = nextDark ? "dark" : "light";
      window.localStorage.setItem("nova-theme", nextDark ? "dark" : "light");
      return nextDark;
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50  px-3 pt-3">
      <nav className="glass mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/20">
            <Icon name="spark" size={18} />
          </span>
          <span className="text-lg">NOVA</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link text-sm text-zinc-400" href={href} key={href}>{label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} className="theme-toggle rounded-xl p-2 text-zinc-400 hover:bg-white/5 hover:text-white">
            <Icon name={dark ? "sun" : "moon"} size={18} />
          </button>
          <a href="#pricing" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5">Log in</a>
          <a href="#cta" className="nav-start-button btn-primary rounded-xl bg-[var(--btn-primary-bg)] px-4 py-2 text-sm font-semibold text-[var(--btn-primary-text)]">Start free</a>
        </div>

        <button className="rounded-xl p-2 text-zinc-300 md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation menu" aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-[1180px] rounded-2xl p-3 md:hidden">
          <div className="flex flex-col">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5">{label}</a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <a href="#pricing" onClick={() => setOpen(false)} className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm">Log in</a>
              <a href="#cta" onClick={() => setOpen(false)} className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black">Start free</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
