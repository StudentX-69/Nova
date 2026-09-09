import Navigation from "./Navigation";
import Icon from "./Icon";
import FAQ from "./FAQ";
import PricingToggle from "./PricingToggle";
import DemoModal from "./DemoModal";
import Newsletter from "./Newsletter";

const logos = [
  { name: "Ipai", src: "https://credentinfotech.com/Bulletproof/logo.png"},
  { name: "SpaceX", src: "https://www.freelogovectors.net/wp-content/uploads/2023/08/spacex-logo-03-freelogovectors.net_.png"},
  { name: "Skyroot", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Skyroot_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  { name: "Razorpay", src: "https://cdn.prod.website-files.com/6584d3c7e9c648618ca2ec43/65c519f3e5d4c8f86f3b712f_razorpay.webp"},
  { name: "Prisma", src: "https://go.prisma.mediaocean.com/sites/default/files/styles/large/public/2026-03/Prisma%20Logo_Dark%404x.webp?itok=wMtHhMDa"},
  { name: "MediaOcean", src: "https://chronus.com/wp-content/uploads/2026/02/logos-slider-clr-mediaocean.png"},
  { name: "Amdocs", src: "https://s3.us-east-1.amazonaws.com/tmf-sfdc-public/Accounts/Amdocs%20Management%20Limited/Logo_Amdocs%20Management%20Limited.png"},
  { name: "Patra", src: "https://media-s3-us-east-1.ceros.com/key-media/images/2022/08/01/a5d1af6d7bb3a77a3ff0273d3db45e54/patra-logo-2.png"}
];

const features = [
  ["AI command center", "Turn plain-language requests into project updates, summaries and next steps.", "bot"],
  ["Smart project hub", "Plan milestones, owners and dependencies without losing the big picture.", "layers"],
  ["Automations", "Remove repetitive admin with rules for handoffs, reminders and status changes.", "zap"],
  ["Team collaboration", "Keep decisions, comments and context close to the work that matters.", "users"],
  ["Live reporting", "See progress, capacity and risks through simple, decision-ready views.", "chart"],
  ["Focus protection", "Give people clearer priorities so deep work stays uninterrupted.", "clock"]
];

const solutions = [
  ["Product teams", "Roadmaps, sprint rituals and release readiness in one intelligent workspace."],
  ["Operations", "Automate recurring workflows and keep cross-team handoffs visible."],
  ["Agencies", "Manage multiple clients, priorities and deliverables without spreadsheet sprawl."],
  ["Startups", "Move fast with lightweight process, shared context and AI-assisted execution."]
];

const testimonials = [
  ["NOVA finally gave our team one place to think, plan and ship. The AI summaries save us hours every week.", "Maya Chen", "COO, Luma Labs"],
  ["We replaced a stack of scattered docs and status meetings with a workflow our whole team actually likes using.", "Jordan Reed", "Head of Ops, Northstar"],
  ["The product feels calm despite the amount of complexity underneath. That is rare for productivity software.", "Priya Shah", "Product Lead, Vertex"]
];

const plans = [
  { name: "Starter", monthly: 12, desc: "For small teams getting organized.", features: ["5 projects", "AI summaries", "Basic automations", "Unlimited guests"] },
  { name: "Growth", monthly: 24, desc: "For teams scaling execution.", featured: true, features: ["Unlimited projects", "Advanced AI workflows", "Custom automations", "Team analytics"] },
  { name: "Scale", monthly: 48, desc: "For complex teams and operations.", features: ["Everything in Growth", "Advanced permissions", "Priority support", "Enterprise-ready controls"] }
];

export default function Site() {
  return (
    <main id="top" className="site-root min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navigation />

      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div className="hero-grid absolute inset-0" />
        <div className="glow-orb absolute left-[8%] top-20 h-64 w-64 rounded-full bg-violet-500" />
        <div className="glow-orb absolute right-[10%] top-32 h-72 w-72 rounded-full bg-cyan-400" />
        <div className="container-wide relative grid items-center gap-12 pb-20 lg:grid-cols-[1.04fr_.96fr] lg:pb-28">
          <div className="float-in max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">
              <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-300" /> AI-native productivity for modern teams
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">Build Better.<br /><span className="gradient-text">Work Smarter.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">NOVA is the AI-powered workspace that connects projects, people and automation — so your team can spend less time managing work and more time moving it forward.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="hero-start-button btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--btn-primary-bg)] px-5 py-3.5 text-sm font-semibold text-[var(--btn-primary-text)]">Start building free <Icon name="arrow" size={17} /></a>
              <DemoModal />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-2"><Icon name="check" size={14} className="text-emerald-300" /> No credit card</span>
              <span className="inline-flex items-center gap-2"><Icon name="check" size={14} className="text-emerald-300" /> 14-day free trial</span>
              <span className="inline-flex items-center gap-2"><Icon name="shield" size={14} className="text-emerald-300" /> Secure by design</span>
            </div>
          </div>

          <div className="hero-panel glass relative rounded-[28px] p-3">
            <div className="rounded-[22px] border border-white/10 bg-[#0c0e14] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-500">Workspace / Product launch</p>
                  <p className="mt-1 font-semibold">Q4 Launch Command Center</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-400">On track</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[['72%', 'Overall progress'], ['18', 'Open tasks'], ['4', 'At risk']].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-[11px] text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between text-xs"><span className="text-zinc-400">Launch readiness</span><span className="text-zinc-200">72%</span></div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-300" /></div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-400"><Icon name="spark" size={14} className="text-violet-300" /> NOVA AI</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-200">“3 tasks look blocked. I grouped the blockers and drafted a follow-up.”</p>
                  <button className="mt-4 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300 hover:bg-white/5">Review suggestions</button>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <div className="text-xs text-zinc-400">Today</div>
                  {[['Copy review', '10:30'], ['Design sync', '13:00'], ['Launch brief', '15:30']].map(([task, time]) => <div key={task} className="mt-3 flex items-center justify-between text-xs"><span className="text-zinc-300">{task}</span><span className="text-zinc-600">{time}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-white/5 bg-white/[0.02] py-4">
          <div className="container-wide overflow-hidden">
            <div className="flex min-w-max items-center gap-10  marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div key={`${logo.name}-${i}`} className="logo-tile flex items-center gap-2 rounded-md p-2 text-sm font-semibold tracking-wide text-zinc-400">
                  <img src={logo.src} alt={logo.name} className="h-20 w-25 rounded-md object-contain bg-transparent" />
                  {/* <span>{logo.name}</span> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-28 py-24 sm:py-28">
        <div className="container-wide">
          <div className="max-w-2xl"><p className="section-kicker">One workspace</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything your team needs to move from idea to impact.</h2><p className="mt-4 leading-7 text-zinc-400">Designed around the way modern teams actually work: fewer handoffs, less admin and more shared context.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, desc, icon]) => <div key={title} className="card-hover glass rounded-3xl p-6"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-violet-300"><Icon name={icon} /></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-28">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div className="glass rounded-[30px] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {['Inbox triage', 'Sprint planning', 'Standup summary', 'Risk detection', 'Client report', 'Launch checklist'].map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><div className="flex items-center justify-between"><span className="text-sm text-zinc-200">{item}</span><span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[10px] text-emerald-500">{index % 2 === 0 ? 'Automated' : 'Ready'}</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5"><div className={`h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-300 ${index % 3 === 0 ? 'w-[86%]' : index % 3 === 1 ? 'w-[62%]' : 'w-[74%]'}`} /></div></div>)}
            </div>
          </div>
          <div>
            <p className="section-kicker">Made for momentum</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From scattered work to a clear next move.</h2>
            <p className="mt-5 leading-7 text-zinc-400">NOVA brings planning, execution and intelligence together. The result is less context switching and a team that knows exactly what matters next.</p>
            <div className="mt-7 space-y-4">{[['01', 'Capture', 'Turn ideas, notes and requests into structured work.'], ['02', 'Coordinate', 'Assign owners, deadlines and dependencies in seconds.'], ['03', 'Automate', 'Let NOVA handle the repeatable work behind the scenes.']].map(([n, title, desc]) => <div key={n} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-xs text-zinc-400">{n}</span><div><h3 className="font-medium">{title}</h3><p className="mt-1 text-sm leading-6 text-zinc-500">{desc}</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-28 border-y border-white/5 bg-white/[0.02] py-24 sm:py-28">
        <div className="container-wide">
          <div className="text-center"><p className="section-kicker">How it works</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Simple enough to start. Powerful enough to scale.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[['1', 'Connect your work', 'Bring your projects, people and priorities into one shared workspace.'], ['2', 'Describe the outcome', 'Tell NOVA what you need in plain language. It handles the busywork.'], ['3', 'Keep shipping', 'Use live signals and AI summaries to stay aligned without more meetings.']].map(([num, title, desc]) => <div key={num} className="relative rounded-3xl border border-white/10 bg-[#0b0d12] p-6"><span className="text-5xl font-semibold tracking-[-.06em] text-white/10">{num}</span><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p></div>)}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{[['4.8/5', 'Average user rating'], ['32%', 'Less status-meeting time'], ['11 hrs', 'Saved per team / week']].map(([value, label]) => <div key={label} className="glass rounded-3xl p-6 text-center"><div className="text-3xl font-semibold">{value}</div><div className="mt-2 text-xs text-zinc-500">{label}</div></div>)}</div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-28 py-24 sm:py-28">
        <div className="container-wide">
          <div className="max-w-2xl"><p className="section-kicker">Solutions</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A smarter operating system for every kind of team.</h2></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">{solutions.map(([title, desc], i) => <div key={title} className="card-hover glass rounded-3xl p-6 sm:p-7"><div className="flex items-center justify-between"><h3 className="font-semibold">{title}</h3><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-zinc-500">0{i + 1}</span></div><p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">{desc}</p><a href="#cta" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-200">Explore workflow <Icon name="arrow" size={15} /></a></div>)}</div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] py-24 sm:py-28">
        <div className="container-wide"><div className="mx-auto max-w-2xl text-center"><p className="section-kicker">Loved by builders</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Less process. More progress.</h2></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{testimonials.map(([quote, name, role]) => <figure key={name} className="card-hover glass rounded-3xl p-6"><div className="flex items-center gap-2"><Icon name="spark" className="text-cyan-300" size={24}/></div><blockquote className="mt-5 text-sm leading-7 text-zinc-300">“{quote}”</blockquote><figcaption className="mt-6 border-t border-white/10 pt-4"><div className="font-medium text-zinc-100">{name}</div><div className="mt-1 text-xs text-zinc-500">{role}</div></figcaption></figure>)}</div></div>
      </section>

      <section id="pricing" className="scroll-mt-28 py-24 sm:py-28">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
             <div>
               <p className="section-kicker">Pricing</p>
               <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start lean. Scale when you are ready.</h2>
               <p className="mt-3 text-zinc-400">All plans include unlimited team members and a 14-day trial.</p>
             </div>
            <PricingToggle />
          </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {plans.map(plan => <div key={plan.name} className={`card-hover relative rounded-3xl border p-6 ${plan.featured ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/10 to-transparent' : 'border-white/10 bg-white/[0.02]'}`}>{plan.featured && <span className="popular-badge absolute right-5 top-5 rounded-full bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-200">Most popular</span>}
                <h3 className="font-semibold">{plan.name}</h3>
                 <p className="mt-2 text-sm text-zinc-500">{plan.desc}</p>
                   <div className="mt-6 flex items-end gap-2">
                      <span className="text-4xl font-semibold">${plan.monthly}</span>
                      <span className="pb-1 text-sm text-zinc-500">/ user / mo</span>
                   </div>
                 <a href="#cta" className={`mt-6 block rounded-xl px-4 py-3 text-center text-sm font-semibold ${plan.featured ? 'growth-plan-button border border-white/10 bg-transparent text-white' : 'border border-white/10 text-zinc-100 hover:bg-white/5'}`}>Choose {plan.name}</a>
                  <div className="mt-7 border-t border-white/10 pt-5 space-y-3">{plan.features.map(feature => <div key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                    <Icon name="check" size={15} className="text-emerald-400" />{feature}</div>)}</div></div>)}
            </div>
         </div>
      </section>

      <section id="faq" className="scroll-mt-28 border-t border-white/5 py-24 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><p className="section-kicker">FAQ</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Questions, answered.</h2><p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">Need something more specific? Bring your workflow question to your demo call or product team.</p></div><FAQ /></div>
      </section>

      <section id="cta" className="scroll-mt-28 py-20">
        <div className="container-wide"><div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(34,211,238,.16),transparent_34%),#0d0f16] p-8 sm:p-12"><div className="max-w-2xl"><p className="section-kicker">Ready when you are</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Turn busywork into momentum.</h2><p className="mt-4 max-w-xl leading-7 text-zinc-400">Join teams using NOVA to build clearer workflows, automate the repetitive stuff and keep the work moving.</p><a href="#pricing" className="btn-primary mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black">Start free with NOVA <Icon name="arrow" size={17} /></a></div></div></div>
      </section>

      <footer className="border-t border-white/5 bg-black/10 py-14">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
                <Icon name="spark" size={18}/>
                </span>
                NOVA
                </div>
                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">AI-powered productivity for teams that want to build better and work smarter.</p>
                <Newsletter /></div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Product</p>
                    <div className="mt-4 space-y-3 text-sm text-zinc-500">
                      <a href="#features" className="block hover:text-white">Features</a>
                      <a href="#pricing" className="block hover:text-white">Pricing</a>
                      <a href="#faq" className="block hover:text-white">FAQ</a></div></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Company</p>
                     <div className="mt-4 space-y-3 text-sm text-zinc-500">
                        <a href="#top" className="block hover:text-white">About</a>
                        <a href="#solutions" className="block hover:text-white">Solutions</a>
                        <a href="#cta" className="block hover:text-white">Contact</a></div>
                     </div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Legal</p>
                       <div className="mt-4 space-y-3 text-sm text-zinc-500">
                          <a href="#top" className="block hover:text-white">Privacy</a>
                          <a href="#top" className="block hover:text-white">Terms</a>
                          <a href="#top" className="block hover:text-white">Security</a>
                       </div>
                    </div>
          </div>
         </div>

        <div className="container-wide mt-12 flex flex-col justify-between gap-3 border-t border-white/5 pt-5 text-xs text-zinc-600 sm:flex-row"><span>© 2026 NOVA Labs. Fictional company for portfolio demonstration.</span><span>Built with Next.js + Tailwind CSS.</span></div>
      </footer>

      <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#11131a]/90 text-zinc-300 shadow-xl backdrop-blur hover:bg-white/10"><span className="text-sm">↑</span></a>
    </main>
  );
}
