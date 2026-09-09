export default function Icon({ name, size = 20, strokeWidth = 1.8, className = "" }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", className };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z"/><path d="m19 15-.8 3.2L15 19l3.2.8L19 23l.8-3.2L23 19l-3.2-.8L19 15Z"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>,
    layers: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"/><path d="m4 12 8 4.5 8-4.5"/><path d="m4 16.5 8 4.5 8-4.5"/></>,
    bot: <><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 3v4"/><path d="M8.5 12h.01"/><path d="M15.5 12h.01"/><path d="M9 16h6"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="3.5"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a3.5 3.5 0 0 1 0 6.74"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 3-4 3 2 4-6"/></>,
    clock: <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.5-2.8 8.1-7 10-4.2-1.9-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    building: <><path d="M4 21V5l8-3v19"/><path d="M12 21h8V9l-8-2"/><path d="M8 8h1"/><path d="M8 12h1"/><path d="M8 16h1"/><path d="M15 12h1"/><path d="M15 16h1"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    quote: <path d="M9 11H5a1 1 0 0 0-1 1v5h5v-5H6c0-2 1-3.3 3-4.2V6c-2.8.8-4.3 2.5-4.3 5"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></>,
    moon: <path d="M20.2 15.8A8.5 8.5 0 0 1 8.2 3.8 8.5 8.5 0 1 0 20.2 15.8Z"/>
  };
  return <svg {...common} aria-hidden="true">{paths[name] || paths.spark}</svg>;
}
