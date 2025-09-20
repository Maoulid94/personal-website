type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const NavLink = ({ href, label, active, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={active ? "active" : undefined}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  );
};

export default NavLink;
