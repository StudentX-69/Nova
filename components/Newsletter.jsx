"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) { setError("Enter a valid email address."); return; }
    setError(""); setSent(true); setEmail("");
  };

  return (
    <form onSubmit={submit} className="mt-6 max-w-xl">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <div className="relative flex-1">
          <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input id="newsletter-email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm outline-none placeholder:text-zinc-600 focus:border-violet-400/50" />
        </div>
        <button className="newsletter-button btn-primary h-12 rounded-xl px-5 text-sm font-semibold">Subscribe</button>
      </div>
      <p className={`mt-2 text-xs ${error ? "text-rose-300" : "text-zinc-500"}`}>{error || (sent ? "You're on the list — welcome to NOVA." : "Weekly product notes. No noise.")}</p>
    </form>
  );
}
