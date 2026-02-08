export default function NavLinks() {
  const links = [
    { name: "About", href: "/#hero" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/#blog" },
    { name: "Analytics", href: "/#analytics" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="px-4 py-2 text-xs md:text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/5"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
