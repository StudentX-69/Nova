"use client";

import { useState } from "react";

export default function PricingToggle({ onChange }) {
  const [annual, setAnnual] = useState(true);
  const change = (value) => { setAnnual(value); onChange?.(value); };
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
      <button onClick={() => change(false)} className={`pricing-toggle rounded-full px-4 py-2 text-xs font-semibold ${!annual ? "bg-white text-black" : "text-zinc-400"}`}>Monthly</button>
      <button onClick={() => change(true)} className={`pricing-toggle rounded-full px-4 py-2 text-xs font-semibold ${annual ? "bg-white text-black" : "text-zinc-400"}`}>Annual <span className="ml-1 text-violet-400">−20%</span></button>
    </div>
  );
}
