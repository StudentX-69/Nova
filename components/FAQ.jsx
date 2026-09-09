"use client";

import { useState } from "react";
import Icon from "./Icon";

const faqs = [
  ["What is NOVA?", "NOVA is an AI-powered productivity workspace that combines project planning, collaboration and automation in one place."],
  ["Can I use NOVA with my existing tools?", "Yes. NOVA is designed to fit beside your current stack with flexible workflows, imports and integrations that can be expanded over time."],
  ["Does NOVA work for small teams?", "Absolutely. The Starter plan is designed for focused teams that want to get organized without adding process overhead."],
  ["Can we automate repetitive tasks?", "Yes. NOVA lets you build simple automation rules for recurring updates, handoffs, reminders, status changes and AI-assisted workflows."],
  ["Is my team data secure?", "NOVA uses role-based access patterns, encrypted transport and a security-first product architecture. Production deployments can add enterprise controls as needed."],
  ["Can we change plans later?", "Yes. You can upgrade or downgrade as your team changes. Billing should be reviewed against the plan terms before a production launch."]
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10">
      {faqs.map(([question, answer], index) => {
        const isOpen = index === active;
        return (
          <div key={question} className="bg-white/[0.02]">
            <button className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left" onClick={() => setActive(isOpen ? -1 : index)} aria-expanded={isOpen}>
              <span className="font-medium text-zinc-100">{question}</span>
              <span className={`shrink-0 rounded-full border border-white/10 p-2 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}><Icon name="chevron" size={16} /></span>
            </button>
            {isOpen && <div className="px-5 pb-5 pr-12 text-sm leading-7 text-zinc-400">{answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
