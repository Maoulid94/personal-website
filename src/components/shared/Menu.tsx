import "../../styles/components/menu.css";

type HamburgerProps = {
  open: boolean;
  onToggle: () => void;
};

const Hamburger = ({ open, onToggle }: HamburgerProps) => {
  return (
    <button
      className={`hamburger ${open ? "active" : ""}`}
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onToggle}
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Hamburger;
