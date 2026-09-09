"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-secondary rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-semibold text-zinc-200 hover:bg-white/[0.06]">Watch demo</button>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label="NOVA demo">
          <div className="hero-panel glass w-full max-w-2xl rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="section-kicker">Product tour</p>
                <h3 className="mt-1 text-2xl font-semibold">See NOVA in action</h3>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-xl p-2 text-zinc-400 hover:bg-white/5" aria-label="Close demo"><Icon name="close" /></button>
            </div>
            <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.22),transparent_55%),#0d0f16]">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-xl"><Icon name="arrow" size={24} /></div>
                <p className="mt-4 text-sm text-zinc-400">Demo placeholder — connect your product video here.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
