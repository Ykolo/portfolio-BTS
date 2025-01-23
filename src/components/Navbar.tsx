import Link from "next/link";

const NavItem = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link href={href} prefetch={true} className="rounded bg-white px-4 py-3 font-bold text-black hover:bg-gray-100">
      {text}
    </Link>
  </li>
);

const Navbar = () => {
  const navItems = [
    { href: "/", text: "Accueil" },
    { href: "/BTS", text: "BTS" },
    { href: "/projets", text: "Projets" },
    { href: "/E4", text: "E4" },
    { href: "/E5", text: "E5" },
    { href: "/veille", text: "Veille technologique" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="p-8">
      <ul className="flex flex-row justify-center gap-4">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;